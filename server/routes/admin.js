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
  @required({
    body: ['username', 'password']
  })
  async login(ctx) {
    const { username, password } = ctx.request.body
    const matchData = await checkPassword(username, password)

    if (!matchData.user) {
      return (ctx.body = {
        success: false,
        err: '用户不存在'
      })
    }

    if (matchData.match) {
      ctx.session.user = {
        _id: matchData.user._id,
        username: matchData.user.username
      }

      return (ctx.body = {
        success: true
      })
    }

    ctx.body = {
      success: false,
      err: '用户名或密码不正确'
    }
  }

}
