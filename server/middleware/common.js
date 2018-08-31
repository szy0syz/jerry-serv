import KoaBody from 'koa-bodyparser'
import koaLogger from 'koa-logger'
import session from 'koa-session'
import cors from '@koa/cors'
import koaStatic from 'koa-static'
import path from 'path'

export const addLogger = app => {
  app.use(koaLogger())
}

export const addStatic = app => {
  // 配置静态资源加载中间件
  app.use(koaStatic(path.join(__dirname, '../static')))
}

export const addCORS = app => {
  app.use(cors())
}

export const addBody = app => {
  app.use(KoaBody())
}

export const addSession = app => {
  app.keys = ['ice']

  const CONFIG = {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true,
    signed: true,
    rolling: false
  }
  app.use(session(CONFIG, app))
}

// Custom 401 handling
// 前置捕捉401错误，就是因为koa才可以前置 error-handler
export const add401Handler = app => {
  app.use((ctx, next) => {
    return next().catch(err => {
      if (401 == err.status) {
        ctx.status = 401
        ctx.body = {
          success: false,
          msg: '401 Unauthorized'
        }
      } else {
        console.error(err)
        throw err
      }
    })
  })
}
