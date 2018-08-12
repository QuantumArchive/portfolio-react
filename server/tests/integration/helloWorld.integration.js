const assert = require('assert')
const supertest = require('supertest')
const { server } = require('../../index')

describe('/server/resolvers/helloWorld', () => {
  const request = supertest(server)
  const graphQlEndpoint = '/graphql'
  
  it('returns a body with hello world on it', async () => {
    const { body: { data: { greeting } } } = await request.post(graphQlEndpoint).send({
      query: `query Greeting {
        greeting {
          message
        }
      }`,
      variables: {}
    })
    assert.deepEqual(greeting, { message: 'hello world' })
  })
})
