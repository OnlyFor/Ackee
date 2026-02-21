import crypto from 'crypto'

import salt from './salt.js'

export default (ip, userAgent, domainId) => {
	return crypto.createHash('sha256').update(`${ salt() }${ ip }${ userAgent }${ domainId }`)
		.digest('hex')
}