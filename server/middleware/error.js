import { format } from '../utils/response'
import { HttpError, CustomError } from '../utils/customError'

export const addErrorHandler = app => {
  app.use((ctx, next) => {
    return next().catch((err) => {
      let code = 500
      let msg = 'unknow error'

      if (err instanceof HttpError || err instanceof HttpError) {
        const res = err.getCodeMsg()
        ctx.status = err instanceof HttpError ? res.code : 200
        code = res.code
        msg = res.msg
      } else {
        // 无法确定错误，只能报500
        ctx.status = code
        console.error('err', err)
      }

      ctx.body = format({}, code, msg)
    })
  })
}