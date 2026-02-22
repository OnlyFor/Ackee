import { getClientIp } from 'request-ip'

import config from './config.js'
import createDate from './createDate.js'
import { isSet } from './ignoreCookie.js'
import isAuthenticated from './isAuthenticated.js'

export const createServerlessContext = (integrationContext) => {
  return createContext(integrationContext.event.headers['client-ip'], integrationContext.event.headers)
}

export const createExpressContext = ({ req }) => {
  return createContext(getClientIp(req), req.headers)
}

const createContext = async (ip, headers) => {
  return {
    isDemoMode: config.isDemoMode,
    isAuthenticated: await isAuthenticated(headers['authorization'], config.ttl),
    isIgnored: isSet(headers['cookie']),
    dateDetails: createDate(headers['time-zone']),
    userAgent: headers['user-agent'],
    ip,
    // Variables used by to set and read cookies and headers
    setCookies: [],
    setHeaders: [],
  }
}
