const Koa = require('koa')
const app = new Koa()
const routes = require('./routes/routes')
const config = require('config')
const mount = require('koa-mount')
const graphqlHTTP = require('koa-graphql')
const { makeExecutableSchema } = require('graphql-tools')
const typeDefs = require('./schemas/index')
const resolvers = require('./resolvers/index')

app.use(mount('/graphql', graphqlHTTP({
  schema: makeExecutableSchema({
    ...typeDefs,
    ...resolvers
  }),
  graphiql: true
})))

routes(app)

const server = app.listen(config.get('port'))

module.exports = {
  app,
  server
}
