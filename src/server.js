import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { readFile } from 'node:fs/promises'
import http from 'node:http'
import path from 'node:path'

import config from './utils/config.js'
import createApolloServer from './utils/createApolloServer.js'
import { createExpressContext } from './utils/createContext.js'
import * as customTracker from './utils/customTracker.js'
import findMatchingOrigin from './utils/findMatchingOrigin.js'
import KnownError from './utils/KnownError.js'
import signale from './utils/signale.js'

const __dirname = import.meta.dirname

const index = readFile(path.resolve(__dirname, '../dist/index.html')).catch(signale.fatal)
const favicon = readFile(path.resolve(__dirname, '../dist/favicon.ico')).catch(signale.fatal)
const styles = readFile(path.resolve(__dirname, '../dist/index.css')).catch(signale.fatal)
const scripts = readFile(path.resolve(__dirname, '../dist/index.js')).catch(signale.fatal)
const tracker = readFile(path.resolve(__dirname, '../dist/tracker.js')).catch(signale.fatal)

const handleGraphError = (error) => {
  // This part is for error that happen inside GraphQL resolvers.
  // All known errors should be thrown as a KnownError as those
  // errors will only show up in the response and as a warning
  // in the console output.

  const suitableError = error.originalError || error
  const isKnownError = suitableError instanceof KnownError

  // Only log the full error stack when the error isn't a known response
  if (isKnownError === false) {
    signale.fatal(suitableError)
    return error
  }

  signale.warn(suitableError.message)
  return error
}

const attachCorsHeaders = async (request, response, next) => {
  const matchingOrigin = await findMatchingOrigin(request, config.allowOrigin, config.autoOrigin)

  if (matchingOrigin != null) {
    response.setHeader('Access-Control-Allow-Origin', matchingOrigin)
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS')
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Time-Zone')
    response.setHeader('Access-Control-Allow-Credentials', 'true')
    response.setHeader('Access-Control-Max-Age', '3600')
  }

  next()
}

const apolloServer = createApolloServer(ApolloServer, {
  formatError: handleGraphError,
  context: createExpressContext,
})

const app = express()

// Apply CORS middleware
app.use(attachCorsHeaders)

// Serve static files
app.get('/', async (request, response) => {
  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  response.end(await index)
})

app.get('/index.html', async (request, response) => {
  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  response.end(await index)
})

app.get('/favicon.ico', async (request, response) => {
  response.setHeader('Content-Type', 'image/vnd.microsoft.icon')
  response.end(await favicon)
})

app.get('/index.css', async (request, response) => {
  response.setHeader('Content-Type', 'text/css; charset=utf-8')
  response.end(await styles)
})

app.get('/index.js', async (request, response) => {
  response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
  response.end(await scripts)
})

app.get('/tracker.js', async (request, response) => {
  response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
  response.end(await tracker)
})

if (customTracker.exists === true) {
  app.get(customTracker.url, async (request, response) => {
    response.setHeader('Content-Type', 'text/javascript; charset=utf-8')
    response.end(await tracker)
  })
}

// Start Apollo Server and apply middleware
await apolloServer.start()
apolloServer.applyMiddleware({
  app,
  path: '/api',
  cors: false, // Disable Apollo's CORS to use our custom CORS middleware
})

// Handle 404 errors for unmatched routes (must be after Apollo middleware)
app.use((request, response) => {
  signale.warn(`\`${request.url}\` not found`)
  response.status(404).send('Not found')
})

// Create HTTP server
const server = http.createServer(app)

export default server
