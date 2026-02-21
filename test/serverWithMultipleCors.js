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

test('return cors headers with corresponding origin if env var specifies multiple origins', async (t) => {
  const url = new URL('/api', await base)

  const restore = mockedEnv({
    ACKEE_ALLOW_ORIGIN: `https://example.com,${url.origin}`,
  })

  const { headers } = await fetch(url.href)

  t.is(headers.get('Access-Control-Allow-Origin'), url.origin)
  t.is(headers.get('Access-Control-Allow-Methods'), 'GET, POST, PATCH, OPTIONS')
  t.is(headers.get('Access-Control-Allow-Headers'), 'Content-Type, Authorization, Time-Zone')
  t.is(headers.get('Access-Control-Allow-Credentials'), 'true')
  t.is(headers.get('Access-Control-Max-Age'), '3600')

  restore()
})
