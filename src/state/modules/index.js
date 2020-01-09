import { combineReducers } from 'redux'
import articleState from './articleState'
import dataState from './dataState'

export default () => combineReducers({
  articleState,
  dataState
})
