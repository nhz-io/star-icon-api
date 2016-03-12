import test from 'ava'
import sinon from 'sinon'
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
	const type = sinon.spy()
	parseOpts.reset()
	const config = createRouteConfig()
	config.handler(null, () => ({type}))
	t.true(parseOpts.calledOnce)
})

test('handler calls createSvg', t => {
	const type = sinon.spy()
	createSvg.reset()
	const config = createRouteConfig()
	config.handler(null, () => ({type}))
	t.true(createSvg.calledOnce)
})

test('handler sets svg mime type', t => {
	const type = sinon.spy()
	const config = createRouteConfig()
	config.handler(null, () => ({type}))
	t.true(type.calledWith('image/svg+xml'))
})
