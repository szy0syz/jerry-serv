import * as qiniu from '../lib/qiniu'
import { controller, get } from '../lib/decorator'

@controller('/qiniu')
export class QiniuController {
  @get('/token')
  async qiniuToken(ctx) {
    let key = ctx.query.key
    let token = qiniu.uptoken(key)

    ctx.body = {
      success: true,
      data: {
        key,
        token
      }
    }
  }
}
