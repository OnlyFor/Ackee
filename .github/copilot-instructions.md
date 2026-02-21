# Ackee Development Guide

Ackee is a self-hosted analytics tool built with Node.js, GraphQL, MongoDB, and React. This guide helps AI agents understand the essential patterns and architecture.

## Architecture Overview

**Backend**: Apollo GraphQL server running on [micro](https://github.com/vercel/micro) (lightweight HTTP microservices framework)

- Entry point: [src/index.js](../src/index.js) → [src/server.js](../src/server.js)
- GraphQL types: [src/types/](../src/types/) (merged with `@graphql-tools/merge`)
- Resolvers: [src/resolvers/](../src/resolvers/) (one file per domain: domains, events, records, etc.)
- Database: MongoDB via Mongoose, models in [src/models/](../src/models/)
- Analytics queries: MongoDB aggregation pipelines in [src/aggregations/](../src/aggregations/)

**Frontend**: React SPA built with custom [Rosid](https://github.com/electerious/Rosid) handlers

- UI source: [src/ui/scripts/](../src/ui/scripts/) (React/JSX) and [src/ui/styles/](../src/ui/styles/) (SCSS)
- Build output: `dist/` directory (index.html, index.js, index.css, tracker.js)
- Build script: [build.js](../build.js) compiles UI assets

**Serverless Support**: Functions in [functions/](../functions/) and [api/](../api/) for Lambda/Vercel/Netlify deployments

## Development Workflow

```bash
npm run dev          # Start with nodemon (auto-rebuilds on changes)
npm run build        # Build production UI assets
npm run server       # Run server without building
npm test             # Run linting + AVA tests
npm run lint         # ESLint + Prettier check
npm run format       # Auto-fix linting issues
```

**Development mode** (`NODE_ENV=development`):

- Enables GraphQL Playground at `/api`
- Disables UI optimization
- Logged via signale in [src/utils/signale.js](../src/utils/signale.js)

**Pre-build mode** (`BUILD_ENV=pre`):

- Builds only static assets (CSS, JS, tracker.js) that don't depend on environment variables
- Used in CI/Docker builds for faster deployments

## Project Structure Patterns

### GraphQL Schema Organization

Each domain (domains, events, records, etc.) has:

1. Type definition in `src/types/{domain}.js` (GraphQL SDL using `gql` tag)
2. Resolvers in `src/resolvers/{domain}.js`
3. Database operations in `src/database/{domain}.js`
4. Mongoose model in `src/models/{Domain}.js` (if applicable)

Example: [src/types/domains.js](../src/types/domains.js) + [src/resolvers/domains.js](../src/resolvers/domains.js) + [src/models/Domain.js](../src/models/Domain.js)

### Middleware Composition with `pipe()`

Resolvers use `pipe()` from [src/utils/pipe.js](../src/utils/pipe.js) to compose middleware functions:

```javascript
import pipe from '../utils/pipe.js'
import requireAuth from '../middlewares/requireAuth.js'
import blockDemoMode from '../middlewares/blockDemoMode.js'

export default {
  Mutation: {
    createDomain: pipe(requireAuth, blockDemoMode, async (parent, { input }) => {
      // resolver logic
    }),
  },
}
```

Common middleware: `requireAuth`, `blockDemoMode`, `validateAuth`

### Error Handling

- **Known errors** (validation, user errors): Throw `KnownError` from [src/utils/KnownError.js](../src/utils/KnownError.js)
  - Logged as warnings only, not full stack traces
  - Returned to client with appropriate messages
- **Unknown errors**: Thrown as regular errors, logged with full stack via signale

### MongoDB Aggregations

Analytics queries use aggregation pipeline builders in [src/aggregations/](../src/aggregations/):

```javascript
// Example: src/aggregations/aggregateViews.js
export default (ids, unique, interval, limit, dateDetails) => {
  const aggregation = [matchDomains(ids), { $group: { _id: {}, count: { $sum: 1 } } }]
  // Dynamic pipeline modification based on params
  if (unique === true) aggregation[0].$match.clientId = { $exists: true }
  return aggregation
}
```

Reusable stages in [src/stages/](../src/stages/) (e.g., `matchDomains`)

## Configuration

Environment variables loaded via `dotenv` and accessed through a Proxy in [src/utils/config.js](../src/utils/config.js):

```javascript
import config from './utils/config.js'
config.dbUrl // ACKEE_MONGODB or MONGODB_URI
config.port // ACKEE_PORT or PORT (default: 3000)
config.allowOrigin // ACKEE_ALLOW_ORIGIN (CORS)
config.autoOrigin // ACKEE_AUTO_ORIGIN=true (auto CORS detection)
config.isDemoMode // ACKEE_DEMO=true
```

See [docs/Options.md](../docs/Options.md) for full list.

## Testing

**Framework**: AVA ([ava.config.js](../package.json) in package.json)

- Tests in [test/](../test/) mirror src/ structure
- In-memory MongoDB via `mongodb-memory-server`
- Run: `npm test` (includes linting)

**Test pattern**:

```javascript
import test from 'ava'
import listen from 'test-listen'
import server from '../src/server.js'

test('description', async (t) => {
  const url = await listen(server)
  // test logic
  t.is(actual, expected)
})
```

## Key Conventions

1. **ES modules**: All code uses `import`/`export` (Node.js native ESM)
2. **GraphQL-first**: UI fetches all data from GraphQL API, no REST endpoints
3. **Privacy-focused**: No cookies, anonymized tracking (see [docs/Anonymization.md](../docs/Anonymization.md))
4. **Serverless-ready**: Apollo Server adapters in [src/serverless.js](../src/serverless.js)
5. **CORS flexibility**: Auto-detection (`ACKEE_AUTO_ORIGIN`) or explicit origins ([docs/CORS headers.md](../docs/CORS%20headers.md))
6. **Custom tracker**: Optionally serve renamed tracker.js via `ACKEE_TRACKER` env var

## Common Tasks

**Add new GraphQL type**:

1. Create `src/types/{name}.js` with SDL schema
2. Import and merge in [src/types/index.js](../src/types/index.js)
3. Create `src/resolvers/{name}.js` with resolver functions
4. Import and merge in [src/resolvers/index.js](../src/resolvers/index.js)

**Add new analytics aggregation**:

1. Create pipeline builder in `src/aggregations/aggregate{Name}.js`
2. Use in resolver to fetch from `Record` or `Action` collections
3. Add types to GraphQL schema if needed

**Modify UI**:

1. Edit React components in `src/ui/scripts/`
2. Build with `npm run build` or use `npm run dev` for auto-rebuild
3. Rosid handlers defined in [src/ui/index.js](../src/ui/index.js)

**Database changes**:

1. Update Mongoose schema in `src/models/{Model}.js`
2. No migrations needed for dev; production uses schema validation
3. Indexes defined in schema (e.g., `index: true`)
