import test from 'ava'

import { day } from '../../src/utils/times.js'
import isExpired from '../../src/utils/isExpired.js'

test('return true when `timestamp` has expired', (t) => {
	const date = new Date()
	date.setDate(date.getDate() - 2)
	const timestamp = date.getTime()

	const result = isExpired(timestamp, day)

	t.true(result)
})

test('return false when `timestamp` is valid', (t) => {
	const timestamp = Date.now()

	const result = isExpired(timestamp, day)

	t.false(result)
})