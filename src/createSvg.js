import {render, paths, normalize} from 'star-icon-tag'
import dom from './microdom'

const header = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`

/**
	* @desc Generate SVG
	* @param {StarIconOpts} opts
	* @return {String} - SVG data
	*/
export function createSvg(opts = {}) {
	const svg = dom.createElement('svg')
	svg.setAttribute('viewBox', '0 0 1 1')
	svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
	svg.setAttribute('version', '1.1')
	svg.setAttribute('baseProfile', 'full')
	if(opts.width && opts.height) {
		svg.setAttribute('width', opts.width)
		svg.setAttribute('height', opts.height)
	}
	render(svg, paths(undefined, opts).items, dom)
	return header + svg.toString()
}

export default createSvg
