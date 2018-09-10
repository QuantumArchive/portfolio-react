const Koa = require('koa')
const app = new Koa()
const config = require('config')
const mount = require('koa-mount')
const graphqlHTTP = require('koa-graphql')
const { makeExecutableSchema } = require('graphql-tools')
const typeDefs = require('./schemas')
const resolvers = require('./resolvers')

const koaWebpack = require('koa-webpack')
const webpackConfig = require('../webpack.config')

const hotSocketPort = 8081
const hotSocket = new Koa().listen(hotSocketPort)

app.use(koaWebpack({
  config: webpackConfig,
  dev: {
    publicPath: `/`,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  hot: {
    server: hotSocket
  }
}))

app.use(mount('/graphql', graphqlHTTP({
  schema: makeExecutableSchema({
    ...typeDefs,
    ...resolvers
  }),
  graphiql: true
})))

const server = app.listen(config.get('port'))

module.exports = {
  app,
  server
}
