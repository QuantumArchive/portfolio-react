const helloWorldSchema = require('./helloWorld.schema')
const querySchema = require('./query.schema')

const schemas = {
  typeDefs: [
    helloWorldSchema,
    querySchema
  ]
}

module.exports = schemas
