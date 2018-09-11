import React from 'react'
import expect from 'expect'
import renderer from 'react-test-renderer'
import { App } from './App'

describe('src/components/App/App.snapshot', () => {
  it('should render a dom element', () => {
    const tree = renderer.create(<App />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
