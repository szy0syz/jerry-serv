const { Route } = require('../lib/decorator')

export const router = app => {
  // const apiPath = resolve(__dirname, '../routes')
  // Todo: 待修复，现在只能传字面量的问题
  const router = new Route(app, '../routes/public')

  router.initPublic()
}
