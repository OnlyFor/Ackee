import {
	ApolloServerPluginLandingPageGraphQLPlayground as apolloServerPluginLandingPageGraphQLPlayground,
	ApolloServerPluginLandingPageDisabled as apolloServerPluginLandingPageDisabled,
} from 'apollo-server-core'
import httpHeadersPlugin from 'apollo-server-plugin-http-headers'
import {
	UnsignedIntResolver,
	UnsignedIntTypeDefinition,
	DateTimeResolver,
	DateTimeTypeDefinition,
	PositiveFloatResolver,
	PositiveFloatTypeDefinition,
	URLResolver,
	URLTypeDefinition,
} from 'graphql-scalars'

import config from './config.js'
import typeDefs from '../types/index.js'
import resolvers from '../resolvers/index.js'

export default (ApolloServer, options) => new ApolloServer({
	cache: 'bounded',
	introspection: config.isDemoMode === true || config.isDevelopmentMode === true,
	playground: config.isDemoMode === true || config.isDevelopmentMode === true,
	debug: config.isDevelopmentMode === true,
	plugins: [
		httpHeadersPlugin,
		(config.isDemoMode === true || config.isDevelopmentMode === true) ?
			apolloServerPluginLandingPageGraphQLPlayground() :
			apolloServerPluginLandingPageDisabled(),
	],
	typeDefs: [
		UnsignedIntTypeDefinition,
		DateTimeTypeDefinition,
		PositiveFloatTypeDefinition,
		URLTypeDefinition,
		typeDefs,
	],
	resolvers: {
		UnsignedInt: UnsignedIntResolver,
		DateTime: DateTimeResolver,
		PositiveFloat: PositiveFloatResolver,
		URL: URLResolver,
		...resolvers,
	},
	...options,
})