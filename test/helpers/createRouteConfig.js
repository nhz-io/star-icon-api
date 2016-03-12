import sinon from 'sinon'
import './setup-unit-tests'
import {inject} from 'mocktail'

export const parseOpts = sinon.spy(request => {
	return request
})
export const createSvg = sinon.spy(opts => {
	return opts
})

inject('parseOpts', parseOpts)
inject('createSvg', createSvg)
