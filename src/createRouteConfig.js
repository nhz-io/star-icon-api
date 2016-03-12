import parseOpts from './parseOpts'
import createSvg from './createSvg'

/** @external {HapiRouteConfig} http://hapijs.com/api#route-options */

/**
	* @typedef {Object} StarApiConfig
	* @property {String} ?method
	* @property {String} ?path - base endpoint
	*/

/**
	* @desc Get hapi route configuration object
	* @param {StarApiConfig} config
	* @return {HapiRouteConfig}
	*/
export function createRouteConfig(config = {}) {
	const {method = 'GET', path = '/star'} = config
	return {
		method, path, handler: (request, reply) => {
			return reply(createSvg(parseOpts(request))).type('image/svg+xml')
		},
	}
}

export default createRouteConfig
