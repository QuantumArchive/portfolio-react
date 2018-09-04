const expect = require('expect')
const config = require('config')
const databaseURL = config.get('firebase.databaseURL')
const credentials = config.get('firebase.credentials')

jest.mock('firebase-admin', () => ({
  initializeApp: jest.fn(),
  credential: { cert: jest.fn().mockReturnValue('hello') }
}))

const firebaseMock = require('firebase-admin')
const firebaseFactory = require('../../server/utils/firebaseSetup')

describe('./server/utils/firebaseSetup', () => {
  it('returns firebase after initializeApp has been called with certs', () => {
    firebaseFactory()
    expect(firebaseMock.credential.cert).toHaveBeenCalledWith(credentials)
    expect(firebaseMock.initializeApp).toHaveBeenCalledWith({
      credential: 'hello',
      databaseURL
    })
  })
})
