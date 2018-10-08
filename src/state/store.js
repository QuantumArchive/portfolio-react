import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './modules'
import { connectRouter, routerMiddleware } from 'connected-react-router'

export default (initialState, history) =>
  createStore(
    connectRouter(history)(reducers()),
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history)
      ),
      global.devToolsExtension
        ? global.devToolsExtension()
        : cb => cb
    )
  )
