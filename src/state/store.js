import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './modules'
import { routerMiddleware } from 'react-router-redux'

export default (initialState, history) =>
  createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history)
      ),
      global.devToolsExtension
        ? global.devToolsExtension()
        : f => f
    )
  )
