import { openidAndSessionKey, WXBizDataCrypt } from '../../wechat-lib/mina'
const { controller, get, del, put, post, required } = require('../../lib/decorator')

@controller('/api/public/mina')
export class minaController {
  @get('/openidAndSessionKey')
  async getOpenID(ctx) {
    const { js_code } = ctx.query
    try {
      const data = await openidAndSessionKey(js_code)
      if ('openid' in data) {
        ctx.body = {
          success: true,
          data
        }
      } else {
        ctx.status = 400
        ctx.body = {
          success: false,
          msg: data.errmsg || '',
          data
        }
      }

    } catch (err) {
      ctx.status = 400
      ctx.body = {
        success: false,
        msg: '请求参数有误'
      }
    }
  }

  @post('/cryptdata')
  @required({
    body: ['session_key', 'encryptedData', 'iv']
  })
  async cryptData(ctx) {
    // 使用修饰器确保传参
    const { session_key, encryptedData, iv } = ctx.request.body
    const wxBizDataCrypt = new WXBizDataCrypt(session_key)
    try {
      const decryptData = wxBizDataCrypt.decryptData(encryptedData, iv)
      ctx.body = {
        success: true,
        data: decryptData
      }
    } catch(err) {
      ctx.status = 400
      ctx.body = {
        success: false,
        msg: '请求参数有误'
      }
    }
  }
}
