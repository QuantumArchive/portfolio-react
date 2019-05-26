const expect = require('expect')
const supertest = require('supertest')
const { server, app } = require('../../server/server')

describe('/server/resolvers/helloWorld', () => {
  const request = supertest(server)
  const graphQlEndpoint = '/graphql'
  const timeout = 5000

  afterAll(done => {
    app.on('close', done)
    server.close()
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
