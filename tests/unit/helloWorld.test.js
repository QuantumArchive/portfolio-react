const expect = require('expect')
const { greeting } = require('../../server/resolvers/helloWorld')

describe('tests/unit/helloWorld', () => {
  it('returns an object with a message hello world', () => {
    const { message } = greeting()
    expect(message).toEqual('hello world')
  })
})
