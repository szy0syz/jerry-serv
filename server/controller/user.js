// [废弃文件]
import axios from 'axios'
import config from '../config'
import MockAdapter from 'axios-mock-adapter'
var mock = new MockAdapter(axios)
mock.onPost(config.base_url + '/api/v1.user/login').reply(function (config) {
  // console.log(JSON.parse(config.data).mobile)
  return [
    200,
    {'ret': 200, 'msg': '请求成功', 'data': {'code': 0, 'message': '登录成功', 'token': 'PhU0Sd9zwUSwOQgXnJpj7pgSwdA7YD80', 'id': 1, 'mobile': '13770267077', 'name': JSON.parse(config.data).mobile, 'sex': 1, 'status': 1, 'role_id': 1, 'depart_id': 1, 'leader_id': 0}}
  ]
})

export const userinfo = async (ctx, next) => {
  let token = ctx.session.user && ctx.session.user.token || ''
  return (ctx.body = {
    ret: 200,
    msg: '获取成功',
    data: { token: token || null }
  })
}
