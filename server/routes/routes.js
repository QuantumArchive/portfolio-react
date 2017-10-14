function routes (app) {
  const helloWorld = require('./helloWorld')
  app.use(helloWorld.middleware())
}

module.exports = routes
