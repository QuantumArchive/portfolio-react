const config = require('config')
const firebase = require('firebase-admin')
const databaseURL = config.get('firebase.databaseURL')
const credentials = config.get('firebase.credentials')
credentials.privateKey = process.env.FIREBASE_KEY || ''

function initializeFirebase () {
  firebase.initializeApp({
    credential: firebase.credential.cert(credentials),
    databaseURL
  })
  return firebase
}

module.exports = initializeFirebase
