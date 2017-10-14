const helloWorld = require('../routes/helloWorld')
const Koa = require('koa')
const app = new Koa()
const assert = require('assert')
const supertest = require('co-supertest')

describe('hello world endpoint test', function () {
  let request

  before(async () => {
    app.use(helloWorld.middleware())
    request = supertest(app.listen())
  })

  it('returns hello world message in json object', async () => {
    let { body } = await request
      .get('/helloworld')
      .expect(200)

    assert.equal(body.message, 'hello world')
  })
})
