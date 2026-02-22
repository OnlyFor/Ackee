import fetch from 'node-fetch'

export const api = async (base, body, token, headers = {}) => {
  const url = new URL('/api', await base)

  const defaultHeaders = {}
  defaultHeaders['Content-Type'] = 'application/json'
  defaultHeaders['Authorization'] = token == null ? undefined : `Bearer ${token}`

  // Use node-fetch as the built-in fetch does not support modifying the Host header,
  // which is required for some tests.
  const result = await fetch(url.href, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {
      ...defaultHeaders,
      ...headers,
    },
  })

  return {
    headers: result.headers,
    json: await result.json(),
  }
}
