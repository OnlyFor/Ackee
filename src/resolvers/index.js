import { mergeResolvers } from '@graphql-tools/merge'

import tokens from './tokens.js'
import permanentTokens from './permanentTokens.js'
import records from './records.js'
import domains from './domains.js'
import events from './events.js'
import actions from './actions.js'
import facts from './facts.js'
import domainStatistics from './domainStatistics.js'
import eventStatistics from './eventStatistics.js'

export default mergeResolvers([
	tokens,
	permanentTokens,
	records,
	domains,
	events,
	actions,
	facts,
	domainStatistics,
	eventStatistics,
])