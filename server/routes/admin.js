import { admin as adminService } from '../service'
const {
  controller,
  get,
  del,
  post,
  auth,
  admin,
  required
} = require('../lib/decorator')

@controller('/api/admin')
export class adminController {
  @get('/user')
  async getUser(ctx, next) {
    ctx.body = {
      ret: 200,
      msg: '获取成功',
      data: { username: 'jerry', name: 'jerry' }
    }
  }

  @post('/login')
  @required({
    body: ['username', 'password']
  })
  async login(ctx) {
    const { username, password } = ctx.request.body
    const matchData = await adminService.login(username, password)

    if (!matchData.user) {
      return (ctx.body = {
        ret: 403,
        success: false,
        msg: '用户不存在'
      })
    }

    if (matchData.match) {
      ctx.session.user = {
        _id: matchData.user._id,
        username: matchData.user.username,
        token: 'PhU0Sd9zwUSwOQgXnJpj7pgSwdA7YD80',
        sign_key: '4444',
        info: {
          id: matchData.user._id,
          mobile: '138',
          name: 'admin',
          status: 1
        }
      }

      return (ctx.body = {
        success: true,
        ret: 200,
        msg: '请求成功',
        data: {
          code: 0,
          message: '登录成功',
          token: '3232893283928392',
          info: {
            name: username,
            mobile: '13988889999',
            _id: matchData.user._id,
            username: matchData.user.username
          }
        }
      })
    }

    ctx.body = {
      ret: 403,
      success: false,
      msg: '用户名或密码不正确'
    }
  }
}
