const expect = require('expect')
const config = require('config')
const databaseURL = config.get('firebase.databaseURL')
// const credentials = config.get('firebase.credentials')
const apiKey = config.get('firebase.apiKey')
const authDomain = config.get('firebase.authDomain')
const storageBucket = config.get('firebase.storageBucket')

jest.mock('firebase', () => ({
  initializeApp: jest.fn(),
  credential: { cert: jest.fn().mockReturnValue('hello') }
}))

const firebaseMock = require('firebase')
const firebaseFactory = require('../../server/lib/firebaseSetup')

describe('./server/lib/firebaseSetup', () => {
  it('returns firebase after initializeApp has been called with certs', () => {
    firebaseFactory()
    // expect(firebaseMock.credential.cert).toHaveBeenCalledWith(credentials)
    expect(firebaseMock.initializeApp).toHaveBeenCalledWith({
      databaseURL,
      apiKey,
      authDomain,
      storageBucket
    })
  })
})
