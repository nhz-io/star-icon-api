import test from 'ava'
import createSvg from '../src/createSvg'
import fixtures from './fixtures/createSvg'

/** @test {src/createSvg.js~createSvg} */

test('empty args', t => {
	t.is(createSvg(), fixtures.emptyArgs)
})

test('width & height', t => {
	t.is(createSvg({width: '200', height: '200'}), fixtures.size200)
})

test('fill', t => {
	t.is(createSvg({fill: 'orange'}), fixtures.fillOrange)
})

test('arms', t => {
	t.is(createSvg({arms: 2}), fixtures.arms2)
})

test('layers', t => {
	t.is(createSvg({layers: 2}), fixtures.layers2)
})

test('listArgs', t => {
	t.is(createSvg({layers: 2, arms: '3, 2', fill: 'red, yellow', zoom: '1, 0.5'}), fixtures.listArgs)
})
