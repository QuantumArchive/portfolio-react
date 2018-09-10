import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import articleState from './articleState'

export default combineReducers({
  routing: routerReducer,
  articles: articleState
})
