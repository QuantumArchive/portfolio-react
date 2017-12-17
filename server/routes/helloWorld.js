const router = require('koa-joi-router')
const route = router()

route.get('/helloworld', async ctx => {
  ctx.body = { message: 'hello world' }
})

module.exports = route
