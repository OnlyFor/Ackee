import { handlers, startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda'

import config from './utils/config.js'
import connect from './utils/connect.js'
import createApolloServer from './utils/createApolloServer.js'
import { createServerlessContext } from './utils/createContext.js'
import fullyQualifiedDomainNames from './utils/fullyQualifiedDomainNames.js'

if (config.dbUrl == null) {
  throw new Error('MongoDB connection URI missing in environment')
}

connect(config.dbUrl)

const apolloServer = createApolloServer()

const resolveAllowedOrigin = async (requestOrigin) => {
  if (config.autoOrigin === true) {
    const names = await fullyQualifiedDomainNames()
    const origins = names.flatMap((name) => [`http://${name}`, `https://${name}`, name])
    return origins.includes(requestOrigin) ? requestOrigin : null
  }

  if (config.allowOrigin === '*') {
    return '*'
  }

  if (config.allowOrigin != null) {
    const origins = config.allowOrigin.split(',')
    return origins.includes(requestOrigin) ? requestOrigin : null
  }

  return null
}

export const handler = startServerAndCreateLambdaHandler(
  apolloServer,
  handlers.createAPIGatewayProxyEventRequestHandler(),
  {
    context: createServerlessContext,
    middleware: [
      async (event) => {
        // Set request context which is missing on Vercel:
        // https://stackoverflow.com/questions/71360059/apollo-server-lambda-unable-to-determine-event-source-based-on-event
        if (event.requestContext == null) event.requestContext = {}

        const requestOrigin = event.headers?.origin || event.headers?.Origin
        const allowedOrigin = await resolveAllowedOrigin(requestOrigin)

        return (result) => {
          if (allowedOrigin != null) {
            result.headers = {
              ...result.headers,
              'access-control-allow-origin': allowedOrigin,
              'access-control-allow-methods': 'GET, POST, PATCH, OPTIONS',
              'access-control-allow-headers': 'Content-Type, Authorization, Time-Zone',
              'access-control-allow-credentials': 'true',
              'access-control-max-age': '3600',
            }
          }
        }
      },
    ],
  },
)
