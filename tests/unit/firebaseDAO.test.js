const assert = require('assert')
const firebaseSetup = require('../../server/lib/firebaseSetup')
const firebaseDAO = require('../../server/lib/firebaseDAO')
const mockFirebaseServer = require('../mocks/mockFirebaseServer')

describe('/server/lib/firebaseDAO', () => {
  const firebaseDB = firebaseSetup().database()
  const firebaseAPI = firebaseDAO({ firebaseDB })

  let firebaseServer
  const initialState = {
    articles: { uniqueId: { helloHow: 'are you?' } }
  }

  beforeAll(() => {
    firebaseServer = mockFirebaseServer(initialState)
  })

  afterAll(async () => {
    await firebaseServer.close()
  })

  describe('getArticles', () => {
    it('asynchronously fetches all articles', async () => {
      const articles = await firebaseAPI.getArticles()
      assert.equal(articles.length, 1)
    })
  })
})
