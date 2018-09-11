import expect from 'expect'
import {
  setArticles,
  SET_ARTICLES
} from './articleStateActions'

describe('src/state/actions/articleStateActions', () => {
  it('setArticles returns an object of type SET_ARTICLES with a payload', () => {
    const actual = setArticles([])
    expect(actual).toEqual({ type: SET_ARTICLES, payload: [] })
  })
})
