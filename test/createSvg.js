import test from 'ava'
import 'babel-register'
import './helpers/setup-unit-tests'
import createSvg from '../src/createSvg'

/** @test {src/createSvg.js~createSvg} */

const svg = `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full"><path d="M 0.5 0 L 0.32366442431225806 0.2572949016875158 L 0.024471741852423234 0.3454915028125263 L 0.21468304511145392 0.5927050983124842 L 0.20610737385376338 0.9045084971874737 L 0.49999999999999994 0.8 L 0.7938926261462365 0.9045084971874737 L 0.785316954888546 0.5927050983124843 L 0.9755282581475768 0.3454915028125264 L 0.676335575687742 0.25729490168751584" fill="#555"></path></svg>`

test('default star for empty args', t => {
	t.is(createSvg(), svg)
})
