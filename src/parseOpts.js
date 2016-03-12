/**
	* @typedef {Object} StarIconOpts
	* @property {String} layers
	* @property {String} arms
	* @property {String} fill
	* @property {String} ratio
	* @property {String} rotation
	* @property {string} zoom
	*/

/**
	* @desc check if passed value (array of values) is an integer
	* @param {Number|String|Array} value
	* @returns {Boolean}
	*/
const isInteger = (value = []) => {
	if (typeof value === 'string') {
		value = value.split(/\s*,\s*/)
	}
	if (!(value instanceof Array)) {
		value = [value]
	}
	return !value.find(v => {
		if (!isNaN(v)) {
			v = parseFloat(v)
			if (Math.floor(v) === v) {
				return false
			}
		}
		return true
	})
}

/**
	* @desc check if passed value (array of values) is a float
	* @param {Number|String|Array} value
	* @returns {Boolean}
	*/
const isFloat = (value = []) => {
	if (typeof value === 'string') {
		value = value.split(/\s*,\s*/)
	}
	if (!(value instanceof Array)) {
		value = [value]
	}
	return !value.find(v => isNaN(v))
}

/**
	* @desc check if passed value (array of values) is alphanumeric
	* @param {Number|String|Array} value
	* @returns {Boolean}
	*/
const isAlphaNumeric = (value = []) => {
	if (typeof value === 'string') {
		value = value.split(/\s*,\s*(?![^(]*\))/)
	}
	if (!(value instanceof Array)) {
		value = [value]
	}
	return !value.find(v => v.toString().match(/[^0-9a-z,.()# ]/i))
}

/**
	* @desc normalize the values by the threshold
	* @param {Number|String|Array} value
	* @param {Number} threshold
	* @returns {String|Array}
	*/
const normalize = (value = [], threshold = 1) => {
	const type = typeof value
	if (type === 'string') {
		value = value.split(/\s*,\s*/)
	}
	if (!(value instanceof Array)) {
		value = [value]
	}
	const max = Math.max(...value) || 1
	if (max > threshold) {
		const ratio = threshold / max
		value = value.map(v => (v * ratio).toString())
		if (type === 'string' || type === 'number') {
			value = value.join(', ')
		}
	}
	return value
}

/** @desc Options parsers */
const parsers = {
	layers(value) {
		if (value && value.toString) {
			value = value.toString()
			if (value && !value.match(/[^0-9]/)) {
				return {layers: value}
			}
		}
		return {}
	},

	arms(value) {
		if (!isInteger(value)) {
			return {}
		}
		if (value instanceof Array) {
			value = value.join(', ')
		}
		return {arms: value.toString()}
	},

	fill(value) {
		if (!isAlphaNumeric(value)) {
			return {}
		}
		if (value instanceof Array) {
			value = value.join(', ')
		}
		return {fill: value.toString()}
	},

	ratio(value) {
		if (!isFloat(value)) {
			return {}
		}
		value = normalize(value)
		if (value instanceof Array) {
			value = value.join(', ')
		}
		return {ratio: value.toString()}
	},

	rotation(value) {
		if (!isFloat(value)) {
			return {}
		}
		if (value instanceof Array) {
			value = value.join(', ')
		}
		return {rotation: value.toString()}
	},

	zoom(value) {
		if (!isFloat(value)) {
			return {}
		}
		value = normalize(value)
		if (value instanceof Array) {
			value = value.join(', ')
		}
		return {zoom: value.toString()}
	},
}

const attributes = Object.keys(parsers)

/**
	* @desc Get star icon opts from the request
	* @param {HapiRequest} request
	* @return {StarIconOpts}
	*/
export function parseOpts({query = {}} = {}) {
	return (
		attributes
			.map(p => query[p] ? parsers[p](query[p]) : {})
			.reduce((r, p) => ({...r, ...p}), {})
	)
}

export default parseOpts
