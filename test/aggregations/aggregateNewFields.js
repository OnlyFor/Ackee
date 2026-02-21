import test from 'ava'
import { randomUUID as uuid } from 'crypto'

import aggregateNewRecords from '../../src/aggregations/aggregateNewRecords.js'

test('return aggregation', (t) => {
	const result = aggregateNewRecords(uuid(), [ 'siteReferrer' ])

	t.true(Array.isArray(result))
})