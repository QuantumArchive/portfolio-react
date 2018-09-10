import expect from 'expect'
import store from './store'

import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'

jest.mock('redux', () => ({
  createStore: jest.fn(),
  combineReducers: jest.fn(),
  applyMiddleware: jest.fn(),
  compose: jest.fn()
}))

describe('src/state/store', () => {
  beforeEach(() => {
    createStore.mockReset()
    combineReducers.mockReset()
    applyMiddleware.mockReset()
    compose.mockReset()
  })

  it('accepts initial state and history', () => {
    const initialState = {}
    const history = jest.fn()
    store(initialState, history)
    expect(createStore).toHaveBeenCalled()
    expect(createStore).toHaveBeenCalledWith(undefined, initialState, undefined)
    expect(compose).toHaveBeenCalled()
    expect(applyMiddleware).toHaveBeenCalled()
  })
})
