import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import { App } from './App'

describe('src/components/App/App', () => {
  it('renders a dom element', () => {
    const app = shallow(<App />)
    expect(app).toBeTruthy()
  })
})
