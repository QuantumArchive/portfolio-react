const expect = require('expect')
const supertest = require('supertest')
const { server } = require('../../index')

describe('/server/resolvers/helloWorld', () => {
  const request = supertest(server)
  const graphQlEndpoint = '/graphql'
  const timeout = 15000

  afterAll((done) => {
    server.close(done)
  }, timeout)

  test('returns a body with hello world on it', async () => {
    const { body: { data: { greeting } } } = await request.post(graphQlEndpoint).send({
      query: `query Greeting {
        greeting {
          message
        }
      }`,
      variables: {}
    })
    expect(greeting).toMatchSnapshot()
  })
})
