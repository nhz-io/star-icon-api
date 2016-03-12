import test from 'ava'
import server from './helpers/server'
import createRouteConfig from '../src/createRouteConfig'
import request from 'superagent'
import fixtures from './fixtures/createSvg'

server.route(createRouteConfig({path: '/'}))

const promise = new Promise(resolve => {
	server.start(() => resolve(server.info.uri))
})

test('no parameters', t => {
	return new Promise(resolve => {
		promise.then(uri => {
			request.get(uri).end((err, res) => {
				if (err) {
					t.fail(err)
				} else {
					t.is(res.body.toString(), fixtures.emptyArgs)
					resolve()
				}
			})
		})
	})
})

test('?width=200&height=200', t => {
	return new Promise(resolve => {
		promise.then(uri => {
			uri += '?width=200&height=200'
			request.get(uri).end((err, res) => {
				if (err) {
					t.fail(err)
				} else {
					t.is(res.body.toString(), fixtures.size200)
					resolve()
				}
			})
		})
	})
})

test('?fill=orange', t => {
	return new Promise(resolve => {
		promise.then(uri => {
			uri += '?fill=orange'
			request.get(uri).end((err, res) => {
				if (err) {
					t.fail(err)
				} else {
					t.is(res.body.toString(), fixtures.fillOrange)
					resolve()
				}
			})
		})
	})
})

test('?arms=2', t => {
	return new Promise(resolve => {
		promise.then(uri => {
			uri += '?arms=2'
			request.get(uri).end((err, res) => {
				if (err) {
					t.fail(err)
				} else {
					t.is(res.body.toString(), fixtures.arms2)
					resolve()
				}
			})
		})
	})
})

test('?layers=2', t => {
	return new Promise(resolve => {
		promise.then(uri => {
			uri += '?layers=2'
			request.get(uri).end((err, res) => {
				if (err) {
					t.fail(err)
				} else {
					t.is(res.body.toString(), fixtures.layers2)
					resolve()
				}
			})
		})
	})
})

test('?layers=2&arms=3,2&fill=red,yellow&zoom=1,0.5', t => {
	return new Promise(resolve => {
		promise.then(uri => {
			uri += '?layers=2&arms=3,2&fill=red,yellow&zoom=1,0.5'
			request.get(uri).end((err, res) => {
				if (err) {
					t.fail(err)
				} else {
					t.is(res.body.toString(), fixtures.listArgs)
					resolve()
				}
			})
		})
	})
})
