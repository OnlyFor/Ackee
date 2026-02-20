import test from 'ava'
import { randomUUID as uuid } from 'crypto'

import aggregateRecentRecords from '../../src/aggregations/aggregateRecentRecords.js'

test('return aggregation', (t) => {
	const result = aggregateRecentRecords(uuid(), [ 'osName', 'osVersion' ])

	t.true(Array.isArray(result))
})