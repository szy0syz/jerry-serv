import jwt from 'jsonwebtoken'
import config from '../config'
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
      const { _id: db_id, username: db_username } = matchData.user
      // 验证成功：使用jwt发放token
      const TOKEN = jwt.sign({ _id: db_id, username: db_username }, config.jwt_secret, { expiresIn: '2h' })
      
      ctx.session.user = {
        _id: db_id,
        username: db_username,
        token: TOKEN,
        sign_key: '4444',
        info: {
          id: db_id,
          mobile: '138',
          name: db_username,
          status: 1
        }
      }
      // TODO: 待重构登录逻辑
      return (ctx.body = {
        success: true,
        ret: 200,
        msg: '请求成功',
        data: {
          code: 0,
          message: '登录成功',
          token: TOKEN,
          info: {
            name: db_username,
            mobile: '13988889999',
            _id: db_id,
            username: db_username
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

  @post('/logout')
  async logout(ctx) {
    try {
      ctx.session.user = null
      return (ctx.body = {
        ret: 200,
        msg: '请求成功',
        data: {
          code: 0,
          message: '退出成功'
        }
      })
    } catch (e) {
      return (ctx.body = {
        ret: 200,
        msg: '请求成功',
        data: {
          code: -1,
          message: '退出失败'
        }
      })
    }
  }
}
