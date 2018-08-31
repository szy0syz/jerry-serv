import Koa from 'koa'
import { Nuxt, Builder } from 'nuxt'
import Router from 'koa-router'
import R from 'ramda'
import { getFilename } from './utils'
import config from './config'
import { basename } from 'path'

const host = config.HOST || process.env.HOST || '0.0.0.0'
const port = config.PORT || process.env.PORT || 3000

// const MIDDLEWARES = ['database', 'common', 'rest', 'pubRouter', 'router'] ,'authentication', 'authorization'
const MIDDLEWARES = ['database', 'common', 'router']

// 自动遍历 ./middleware/*.js 导出对象后再逐个遍历初始化koa中间件
const useMiddlewares = app => {
  // 不递归加载子目录
  const context = require.context('./middleware/', false, /\.js$/)
  const keyList = context.keys()
  // R.map(
  //   R.compose(
  //     filename => MIDDLEWARES.includes(filename),
  //     key => getFilename(key)
  //   )
  // )(context.keys())

  //重构中间件加载流程
  MIDDLEWARES.forEach(midName => {
    const key = keyList.filter(k => basename(k, '.js') === midName)

    try {
      R.forEachObjIndexed(initWith => initWith(app))(context(key))
    } catch (err) {
      console.error(err)
    }
  })

  // context.keys().forEach(key => {
  //   const filename = getFilename(key)
  //   //console.log('filename~~~', filename)
  //   const isValid = MIDDLEWARES.includes(filename)
  //   if (isValid) {
  //     //console.log('成功加载系统中间件:', filename)
  //     try {
  //       R.forEachObjIndexed(initWith => initWith(app))(context(key))
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
  // })
}

class Server {
  constructor() {
    this.app = new Koa()
    useMiddlewares(this.app)
  }

  async start(host, port) {
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
    console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
  }
}

try {
  const app = new Server()
  app.start(host, port)
} catch (err) {
  console.error(err)
}
