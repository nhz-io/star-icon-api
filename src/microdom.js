class Node {
	constructor({attributes, children, nodeName} = {}) {
		this.attributes = attributes || []
		this.children = children || []
		this.nodeName = nodeName || 'div'
	}

	/**
	* @desc setAttribute
	* @param {String} name
	* @param {String} value
	* @param {Node} node
	*/
	setAttribute(name, value, node = this) {
		let attribute = node.attributes.find(a => a.name === name)
		if (!attribute) {
			attribute = {}
			node.attributes.push(attribute)
		}
		attribute.name = name
		attribute.value = value
		return node
	}

	/**
		* @desc getAttribute
		* @param {String} name
		* @param {Node} node
		*/
	getAttribute(name, node = this) {
		const attribute = node.attributes.find(a => a.name === name)
		if (attribute) {
			return attribute.value
		}
	}

	/**
		* @desc appendChild
		* @param {Node} child
		* @param {Node} parent
		* @returns {Node}
		*/
	appendChild(child, parent = this) {
		if (parent && child && parent.children) {
			if (parent.children.indexOf(child) === -1) {
				parent.children.push(child)
			}
		}
		return parent
	}

	/**
		* @desc removeChild
		* @param {Node} child
		* @param {Node} parent
		* @returns {Node}
		*/
	removeChild(child, parent = this) {
		if (parent && child && parent.children) {
			const index = parent.children.indexOf(child)
			if (index > -1) {
				parent.children.splice(index, 1)
			}
		}
		return parent
	}

	/** @desc toString */
	toString() {
		const {nodeName} = this
		const children = this.children.map(c => c.toString()).join('')
		const attributes = this.attributes.map(a => {
			const value = typeof a.value === 'undefined' ? '' : a.value
			return value ? ` ${a.name}="${value}"` : ''
		}).join('')

		return `<${nodeName}${attributes}>${children}</${nodeName}>`
	}
}

export const microdom = {
	createElement: nodeName => new Node({nodeName}),
	createElementNS: (ns, nodeName) => new Node({nodeName}),
}

export default microdom
