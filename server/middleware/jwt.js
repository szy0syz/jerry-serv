import koajwt from 'koa-jwt'
import config from '../config/index'

export const addJWT = app => {
  // Custom 401 handling
  // 前置捕捉401错误，就是因为koa才可以前置 error-handler
  app.use((ctx, next) => {
    return next().catch(err => {
      if (401 == err.status) {
        ctx.status = 401
        ctx.body = {
          success: false,
          msg:
            '401 Unauthorized - Protected resource, use Authorization header to get access.'
        }
      } else {
        console.error(err)
        throw err
      }
    })
  })

  // 启用JWT认真
  app.use(koajwt({ secret: config.jwt_secret }).unless({ path: [/\/admin\/login/] }))
}
