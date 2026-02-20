import { resolve, dirname } from 'path'
import { writeFile, readFile } from 'fs/promises'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'

import layout from '../utils/layout.js'
import config from '../utils/config.js'
import { exists, url, path } from '../utils/customTracker.js'
import signale from '../utils/signale.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const customTracker = { exists, url, path }

const index = () => {
	return layout('<div id="main"></div>', 'favicon.ico', [ 'index.css' ], [ 'index.js' ], {
		isDemoMode: config.isDemoMode,
		customTracker,
	})
}

const styles = async () => {
	const { default: sass } = await import('rosid-handler-sass')
	const filePath = resolve(__dirname, './styles/index.scss')

	return sass(filePath, { optimize: config.isDevelopmentMode === false })
}

const scripts = async () => {
	const { default: js } = await import('rosid-handler-js-next')
	const filePath = resolve(__dirname, './scripts/index.js')

	return js(filePath, {
		optimize: config.isDevelopmentMode === false,
		nodeGlobals: config.isDevelopmentMode === true,
		replace: { 'process.env.NODE_ENV': JSON.stringify(config.isDevelopmentMode === true ? 'development' : 'production') },
		babel: false,
	})
}

const tracker = () => {
	const require = createRequire(import.meta.url)
	const filePath = require.resolve('ackee-tracker')

	return readFile(filePath, 'utf8')
}

const build = async (path, fn) => {
	try {
		signale.await(`Building and writing '${ path }'`)
		const data = await fn()
		await writeFile(path, data)
		signale.success(`Finished building '${ path }'`)
	} catch (error) {
		signale.fatal(error)
		process.exit(1)
	}
}

export {
	index,
	styles,
	scripts,
	tracker,
	build,
}