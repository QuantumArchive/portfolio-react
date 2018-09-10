const Koa = require('koa')
const app = new Koa()
const mount = require('koa-mount')
const graphqlHTTP = require('koa-graphql')
const { makeExecutableSchema } = require('graphql-tools')
const typeDefs = require('./schemas')
const resolvers = require('./resolvers')
const { parse } = require('path')

const koaWebpack = require('koa-webpack')
const webpackConfig = require('../webpack.config')

const devPort = 3000
const hotSocketPort = 8081
const hotSocket = new Koa().listen(hotSocketPort)

koaWebpack({
  config: webpackConfig,
  devMiddleware: {
    publicPath: `/chris-react-portfolio`,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  hotClient: {
    server: hotSocket
  }
})
  .then(middleware => {
    app.use(middleware)
    app.use(mount('/graphql', graphqlHTTP({
      schema: makeExecutableSchema({
        ...typeDefs,
        ...resolvers
      }),
      graphiql: true
    })))
    app.use(async (ctx, next) => {
      const { base } = parse(ctx.path)
      if (base.includes('.js') && ctx.path !== 'chris-react-portfolio/bundle.js') {
        ctx.redirect('chris-react-portfolio/bundle.js')
      }
      await next()
    })
  })

const server = app.listen(devPort)

module.exports = {
  app,
  server
}
