import combinedReducers from './index'
import expect from 'expect'

describe('src/state/modules/index', () => {
  it('returns all reducers', () => {
    const allReducers = combinedReducers()
    expect(typeof allReducers).toBe('function')
  })
})
