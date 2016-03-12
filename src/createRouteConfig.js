import parseOpts from './parseOpts'

/** @typedef {Object} HapiRouteConfig */

/**
	* @typedef {Object} StarApiConfig
	* @property {String} ?method
	* @property {String} ?path - base endpoint
	* @property {Boolean} ?redis - redis client
	*/

/**
	* @desc Get hapi route configuration object
	* @param {StarApiConfig} config
	* @return {HapiRouteConfig}
	*/
export function createRouteConfig(config = {}) {
	const {method = 'GET', path = '/star', redis} = config
	return {}
}

export default createRouteConfig
