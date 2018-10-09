const config = require('config')
const firebase = require('firebase')
const databaseURL = config.get('firebase.databaseURL')
const credentials = config.get('firebase.credentials')
const apiKey = config.get('firebase.apiKey')
const authDomain = config.get('firebase.authDomain')
const storageBucket = config.get('firebase.storageBucket')
credentials.privateKey = process.env.FIREBASE_KEY || ''

function initializeFirebase () {
  // TODO: figure out this firebase admin privilege stuff
  // const credential = firebase.credential.cert(credentials)
  return firebase.initializeApp({
    databaseURL,
    authDomain,
    apiKey,
    storageBucket
  })
}

module.exports = initializeFirebase
