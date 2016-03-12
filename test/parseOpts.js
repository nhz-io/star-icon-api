import test from 'ava'
import './helpers/parseOpts'
import parseOpts from '../src/parseOpts'

/** @test {src/parseOpts.js~parseOpts} */

test('returns empty object', t => {
	t.same(parseOpts(), {})
})

test('sets layers option', t => {
	t.same(parseOpts({query: {layers: 1}}), {layers: '1'})
	t.same(parseOpts({query: {layers: '1'}}), {layers: '1'})
})

test('ignores invalid layers option', t => {
	t.same(parseOpts({query: {layers: null}}), {})
	t.same(parseOpts({query: {layers: []}}), {})
	t.same(parseOpts({query: {layers: {}}}), {})
	t.same(parseOpts({query: {layers: 'test'}}), {})
})

test('sets fill option', t => {
	t.same(parseOpts({query: {fill: 'red'}}), {fill: 'red'})
	t.same(parseOpts({query: {fill: '#f00'}}), {fill: '#f00'})
	t.same(parseOpts({query: {fill: 'red, green, blue'}}), {fill: 'red, green, blue'})
	t.same(parseOpts({query: {fill: ['red', 'green', 'blue']}}), {fill: 'red, green, blue'})
	t.same(parseOpts({query: {fill: 'rgba(255,0,0,1)'}}), {fill: 'rgba(255,0,0,1)'})
})

test('ignores invalid fill option', t => {
	t.same(parseOpts({query: {fill: '$test'}}), {})
	t.same(parseOpts({query: {fill: ['$test']}}), {})
	t.same(parseOpts({query: {fill: 'red, $test, blue'}}), {})
})

test('sets arms option', t => {
	t.same(parseOpts({query: {arms: 5}}), {arms: '5'})
	t.same(parseOpts({query: {arms: '5'}}), {arms: '5'})
	t.same(parseOpts({query: {arms: '5, 4, 3'}}), {arms: '5, 4, 3'})
	t.same(parseOpts({query: {arms: [5, 4, 3]}}), {arms: '5, 4, 3'})
	t.same(parseOpts({query: {arms: ['5', '4', '3']}}), {arms: '5, 4, 3'})
})

test('ignores invalid arms option', t => {
	t.same(parseOpts({query: {arms: 'test'}}), {})
	t.same(parseOpts({query: {arms: ['test']}}), {})
	t.same(parseOpts({query: {arms: [5, 'test', 3]}}), {})
	t.same(parseOpts({query: {arms: '5, test, 3'}}), {})
})

test('sets ratio option', t => {
	t.same(parseOpts({query: {ratio: 0.5}}), {ratio: '0.5'})
	t.same(parseOpts({query: {ratio: '0.5'}}), {ratio: '0.5'})
	t.same(parseOpts({query: {ratio: '0.5, 0.2'}}), {ratio: '0.5, 0.2'})
	t.same(parseOpts({query: {ratio: [0.5, 0.2]}}), {ratio: '0.5, 0.2'})
	t.same(parseOpts({query: {ratio: ['0.5', '0.2']}}), {ratio: '0.5, 0.2'})
})

test('normalizes the ratio', t => {
	t.same(parseOpts({query: {ratio: 50}}), {ratio: '1'})
	t.same(parseOpts({query: {ratio: '50'}}), {ratio: '1'})
	t.same(parseOpts({query: {ratio: '50, 25, 12.5'}}), {ratio: '1, 0.5, 0.25'})
	t.same(parseOpts({query: {ratio: [50, 25, 12.5]}}), {ratio: '1, 0.5, 0.25'})
	t.same(parseOpts({query: {ratio: ['50', '25', '12.5']}}), {ratio: '1, 0.5, 0.25'})
})

test('ignores invalid ratio option', t => {
	t.same(parseOpts({query: {ratio: 'test'}}), {})
	t.same(parseOpts({query: {ratio: '12, test'}}), {})
	t.same(parseOpts({query: {ratio: [12, 'test']}}), {})
	t.same(parseOpts({query: {ratio: ['12', 'test']}}), {})
})

test('sets rotation option', t => {
	t.same(parseOpts({query: {rotation: 90}}), {rotation: '90'})
	t.same(parseOpts({query: {rotation: '90'}}), {rotation: '90'})
	t.same(parseOpts({query: {rotation: '90, 45'}}), {rotation: '90, 45'})
	t.same(parseOpts({query: {rotation: [90, 45]}}), {rotation: '90, 45'})
	t.same(parseOpts({query: {rotation: ['90', '45']}}), {rotation: '90, 45'})
})

test('ignores invalid rotation option', t => {
	t.same(parseOpts({query: {rotation: 'test'}}), {})
	t.same(parseOpts({query: {rotation: '90, test'}}), {})
	t.same(parseOpts({query: {rotation: [90, 'test']}}), {})
	t.same(parseOpts({query: {rotation: ['90, test']}}), {})
})

test('sets zoom option', t => {
	t.same(parseOpts({query: {zoom: 1}}), {zoom: '1'})
	t.same(parseOpts({query: {zoom: '1'}}), {zoom: '1'})
	t.same(parseOpts({query: {zoom: '1, 0.5'}}), {zoom: '1, 0.5'})
	t.same(parseOpts({query: {zoom: [1, 0.5]}}), {zoom: '1, 0.5'})
	t.same(parseOpts({query: {zoom: ['1', '0.5']}}), {zoom: '1, 0.5'})
})

test('normalizes the zoom', t => {
	t.same(parseOpts({query: {zoom: 50}}), {zoom: '1'})
	t.same(parseOpts({query: {zoom: '50'}}), {zoom: '1'})
	t.same(parseOpts({query: {zoom: '50, 25, 12.5'}}), {zoom: '1, 0.5, 0.25'})
	t.same(parseOpts({query: {zoom: [50, 25, 12.5]}}), {zoom: '1, 0.5, 0.25'})
	t.same(parseOpts({query: {zoom: ['50', '25', '12.5']}}), {zoom: '1, 0.5, 0.25'})
})

test('ignores invalid zoom option', t => {
	t.same(parseOpts({query: {zoom: 'test'}}), {})
	t.same(parseOpts({query: {zoom: '1, test'}}), {})
	t.same(parseOpts({query: {zoom: [1, 'test']}}), {})
	t.same(parseOpts({query: {zoom: ['1, test']}}), {})
})
