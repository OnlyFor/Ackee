import test from 'ava'
import mockedEnv from 'mocked-env'
import listen from 'test-listen'

import server from '../src/server.js'
import { job as saltJob } from '../src/utils/salt.js'

const base = listen(server)

test.after.always(() => {
  server.close()
  saltJob.cancel()
})

test('return cors headers with no origin if hostname not whitelisted in env var', async (t) => {
  const url = new URL('/api', await base)

  const restore = mockedEnv({
    ACKEE_ALLOW_ORIGIN: 'https://example.com',
  })

  const { headers } = await fetch(url.href)

  t.is(headers.get('Access-Control-Allow-Origin'), null)
  t.is(headers.get('Access-Control-Allow-Methods'), null)
  t.is(headers.get('Access-Control-Allow-Headers'), null)
  t.is(headers.get('Access-Control-Allow-Credentials'), null)
  t.is(headers.get('Access-Control-Max-Age'), null)

  restore()
})
