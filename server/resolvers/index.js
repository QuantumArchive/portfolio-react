const helloWorld = require('./helloWorld')

const allResolvers = {
  resolvers: {
    Query: Object.assign({},
      helloWorld
    )
  }
}

module.exports = allResolvers
