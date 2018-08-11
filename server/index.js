import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import session from 'koa-session2'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import koaLogger from 'koa-logger'
import route from './routers'
import cors from '@koa/cors'
import koaStatic from 'koa-static'
import path from 'path'

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000


class Server {
  constructor() {
    this.app = new Koa()
  }

  async start(host, port) {
    // session必须在路由前注册
    this.app.use(
      session({
        key: '12345',
        overwrite: true
      })
    )
    // 配置控制台日志中间件
    this.app.use(koaLogger())

    // 配置静态资源加载中间件
    this.app.use(koaStatic(path.join(__dirname, './src')))

    this.app.use(cors())
    this.app.use(bodyParser())

    const router = new Router()
    router.use('', route.routes())
    this.app.use(router.routes()).use(router.allowedMethods())

    // Import and Set Nuxt.js options
    let config = require('../nuxt.config.js')
    // 由于涉及到三个环境变化，使用在test，production 时候，为false
    config.dev = !(app.env === 'production' || app.env === 'test')
    // console.log('env === ', app.env, env, process.env.COOKIE_DOMAIN, process.env.APP_ENV, config.dev)

    // Instantiate nuxt.js
    const nuxt = new Nuxt(config)

    // Build in development
    if (config.dev) {
      const builder = new Builder(nuxt)
      await builder.build()
    }

    this.app.use(async (ctx, next) => {
      await next()
      ctx.status = 200 // koa defaults to 404 when it sees that status is unset
      ctx.req.session = ctx.session // 必须将session添加进request中，否则nuxt的req获取不到session
      return new Promise((resolve, reject) => {
        ctx.res.on('close', resolve)
        ctx.res.on('finish', resolve)
        nuxt.render(ctx.req, ctx.res, promise => {
          // nuxt.render passes a rejected promise into callback on error.
          promise.then(resolve).catch(reject)
        })
      })
    })

    this.app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
  }
}

const app = new Server()
app.start(host, port)
