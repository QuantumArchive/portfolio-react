import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import 'react-virtualized/styles.css'
import createBrowserHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'connected-react-router'
import configureStore from './state/store'
import App from './components/App/App'
import { APP_NAME, GRAPHQL_FETCH_POLICY } from './constants'

const history = createBrowserHistory({
  basename: APP_NAME
})

const store = configureStore(
  {},
  history
)

const requestLink = new HttpLink({
  uri: 'chris-react-portfolio/graphql',
  credentials: 'same-origin'
})

const errorLink = onError(errors => {})

const client = new ApolloClient({
  link: errorLink.concat(requestLink),
  cache: new InMemoryCache({
    fragmentMatcher: new IntrospectionFragmentMatcher({
      introspectionQueryResultData: { '__schema': { types: [] } }
    }),
    dataIdFomObject: object => object.id || null
  }),
  defaultOptions: {
    query: {
      fetchPolicy: GRAPHQL_FETCH_POLICY.NETWORK_ONLY
    }
  }
})

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
