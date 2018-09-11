import { SET_ARTICLES } from '../actions/articleStateActions'

export const defaultState = {
  articles: []
}

export const articleState = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_ARTICLES:
      return {
        ...state,
        articles: [...payload]
      }
    default:
      return { ...state }
  }
}

export default articleState
