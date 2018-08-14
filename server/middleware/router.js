const { Route } = require('../lib/decorator')
// const { resolve } = require('path')
// 只要执行此中间件，就等于执行了整个路由中间层
export const router = app => {
  // const apiPath = resolve(__dirname, '../routes')
  // Todo: 待修复，现在智能传相对路径，且字符串
  const router = new Route(app, '../routes')

  router.init()
}
