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

  const getMocks = () => ({
    initialState: {},
    history: jest.fn()
  })

  it('accepts initial state and history', () => {
    const { initialState, history } = getMocks()
    store(initialState, history)
    expect(createStore).toHaveBeenCalled()
    expect(compose).toHaveBeenCalled()
    expect(applyMiddleware).toHaveBeenCalled()
  })

  it('calls global.devToolsExtension if it exists in the global namespace', () => {
    const devToolsExtension = jest.fn()
    global.devToolsExtension = devToolsExtension
    const { initialState, history } = getMocks()
    store(initialState, history)
    expect(devToolsExtension).toHaveBeenCalled()
    delete global.devToolsExtension
  })

  it('returns a callback function as the second argument of compose if devToolsExtension does not exist', () => {
    const { initialState, history } = getMocks()
    store(initialState, history)
    expect(compose).toHaveBeenCalled()
    const callback = compose.mock.calls[0][1]
    callback()
  })
})
