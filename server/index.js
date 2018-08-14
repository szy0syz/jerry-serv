import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import Router from 'koa-router'
import route from './routers'
import R from 'ramda'

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

const getFilename = path => {
  const reg = /\/(\w+).js$/
  const res = reg.exec(path)
  return res && res[1]
}
const MIDDLEWARES = ['database', 'common', 'router']

// 自动遍历 ./middleware/*.js 导出对象后再逐个遍历初始化koa中间件
const useMiddlewares = app => {
  const context = require.context('./middleware/', false, /\.js$/)
  
  // R.map(
  //   R.compose(
  //     filename => MIDDLEWARES.includes(filename),
  //     key => getFilename(key)
  //   )
  // )(context.keys())
  
  context.keys().forEach(key => {
    const filename = getFilename(key)
    const isValid = MIDDLEWARES.includes(filename)
    if (isValid) {
      console.log('成功加载系统中间件:', filename)
      try {
        R.forEachObjIndexed(initWith => initWith(app))(context(key))
      } catch (err) {
        console.error(err)
      }
    }
  })
}

class Server {
  constructor() {
    this.app = new Koa()
    useMiddlewares(this.app)
  }

  async start(host, port) {
    const router = new Router()
    router.use('', route.routes())
    this.app.use(router.routes()).use(router.allowedMethods())

    // Import and Set Nuxt.js options
    let config = require('../nuxt.config.js')
    config.dev = !(process.env.NODE_ENV === 'production')
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

try {
  const app = new Server()
  app.start(host, port)
} catch (err) {
  console.error(err)
}
