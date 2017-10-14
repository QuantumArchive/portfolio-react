const Koa = require('koa')
const app = new Koa()
const routes = require('./routes/routes')

routes(app)

app.listen(9000)
