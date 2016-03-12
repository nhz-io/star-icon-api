import test from 'ava'
import './helpers/setup-unit-tests'
import {createSvg, parseOpts} from './helpers/createRouteConfig'
import createRouteConfig from '../src/createRouteConfig'

/** @test {src/createRouteConfig.js~createRouteConfig} */

test('returns default config', t => {
	const config = createRouteConfig()
	t.is(config.method, 'GET')
	t.is(config.path, '/star')
	t.is(typeof config.handler, 'function')
})

test('uses provided path', t => {
	const config = createRouteConfig({path: '/test'})
	t.is(config.path, '/test')
})

test('uses provided method', t => {
	const config = createRouteConfig({method: 'GET'})
	t.is(config.method, 'GET')
})

test('handler calls parseOpts', t => {
	parseOpts.reset()
	const config = createRouteConfig()
	config.handler(null, () => {})
	t.true(parseOpts.calledOnce)
})

test('handler calls createSvg', t => {
	createSvg.reset()
	const config = createRouteConfig()
	config.handler(null, () => {})
	t.true(createSvg.calledOnce)
})
