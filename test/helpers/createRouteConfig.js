import sinon from 'sinon'
import './setup-unit-tests'
import {inject} from 'mocktail'

export const parseOpts = sinon.spy()
export const createSvg = sinon.spy()

inject('parseOpts', parseOpts)
inject('createSvg', createSvg)
