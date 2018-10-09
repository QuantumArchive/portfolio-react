const FirebaseServer = require('firebase-server')
const config = require('config')
const domain = config.get('firebase.domain')
const port = config.get('firebase.port')

function mockFirebaseServer (initialState) {
  return new FirebaseServer(port, domain, { ...initialState })
}

module.exports = mockFirebaseServer
