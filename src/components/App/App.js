import React from 'react'
import { hot } from 'react-hot-loader'
import DataLoader from '../DataLoader/DataLoader'

export const App = () => (
  <div>
    <DataLoader />
  </div>
)

export default hot(module)(App)
