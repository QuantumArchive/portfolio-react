import { combineReducers } from 'redux'
import articleState from './articleState'

export default combineReducers({
  articles: articleState
})
