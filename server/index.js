const Koa = require('koa')
const app = new Koa()
const routes = require('./routes/routes')
const config = require('config')

routes(app)

app.listen(config.get('port'))
