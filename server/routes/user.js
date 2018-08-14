const { controller, get, del, post, auth, admin, required } = require('../lib/decorator')

@controller('/api/admin')
export class adminController {
  @get('/user')
  async getUser(ctx, next) {
    ctx.body = {
      ret: 200,
      msg: '获取成功',
      data: { username: 'jerry' }
    }
  }

  @post('/login')
  async login(ctx, next) {
    ctx.session = null

    ctx.body = {
      success: true
    }
  }

}
