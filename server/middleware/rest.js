const restfulRouter = require('./restful')

export const addRestful = app => {
  app.use(restfulRouter.routes()).use(restfulRouter.allowedMethods())
}