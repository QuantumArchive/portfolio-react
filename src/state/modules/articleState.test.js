import expect from 'expect'
import { defaultState, articleState } from './articleState'
import { SET_ARTICLES } from '../actions/articleStateActions'

describe('src/state/modules/articleState', () => {
  it('returns state by default if no type is passed on action', () => {
    const state = articleState(undefined, {})
    expect(state).toEqual({ ...defaultState })
  })

  it('SET_ARTICLES action type adds passed payload to articles', () => {
    const payload = [{ hello: 'world' }]
    const action = { type: SET_ARTICLES, payload }
    const state = articleState({ ...defaultState }, action)
    expect(state).toEqual({
      articles: [...payload]
    })
  })
})
