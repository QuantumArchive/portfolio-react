import expect from 'expect'
import store from './store'

import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import {
  routerMiddleware
} from 'connected-react-router'

jest.mock('redux', () => ({
  createStore: jest.fn(),
  combineReducers: jest.fn(),
  applyMiddleware: jest.fn(),
  compose: jest.fn()
}))

jest.mock('connected-react-router', () => ({
  connectRouter: () => jest.fn(),
  routerMiddleware: jest.fn()
}))

describe('src/state/store', () => {
  beforeEach(() => {
    createStore.mockReset()
    combineReducers.mockReset()
    applyMiddleware.mockReset()
    compose.mockReset()
    routerMiddleware.mockReset()
  })

  it('accepts initial state and history', () => {
    const initialState = {}
    const history = jest.fn()
    store(initialState, history)
    expect(createStore).toHaveBeenCalled()
    expect(compose).toHaveBeenCalled()
    expect(applyMiddleware).toHaveBeenCalled()
  })
})
