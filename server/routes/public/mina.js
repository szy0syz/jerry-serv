import { openidAndSessionKey } from '../../wechat-lib/mina'
const { controller, get, del, put, post, required } = require('../../lib/decorator')

@controller('/api/public/mina')
export class minaController {
  @get('/openidAndSessionKey')
  async getOpenID(ctx) {
    const { js_code } = ctx.query
    try {
      const data = await openidAndSessionKey(js_code)

      ctx.body = {
        success: true,
        data
      }
    } catch (err) {
      ctx.status = 400
      ctx.body = {
        success: false,
        msg: '请求参数有误'
      }
    }
  }
}
