import { mergeTypeDefs } from '@graphql-tools/merge'

import tokens from './tokens.js'
import permanentTokens from './permanentTokens.js'
import records from './records.js'
import domains from './domains.js'
import events from './events.js'
import actions from './actions.js'
import facts from './facts.js'
import miscellaneous from './miscellaneous.js'
import domainStatistics from './domainStatistics.js'
import eventStatistics from './eventStatistics.js'

export default mergeTypeDefs([
	tokens,
	permanentTokens,
	records,
	domains,
	events,
	actions,
	facts,
	miscellaneous,
	domainStatistics,
	eventStatistics,
], { all: true })