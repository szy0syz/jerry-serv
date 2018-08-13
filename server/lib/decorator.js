const Router = require('koa-router')
const { resolve } = require('path')
// const glob = require('glob')
const _ = require('lodash')
const R = require('ramda')

const symbolPrefix = Symbol('prefix')
const routeMap = new Map()

const isArray = c => _.isArray(c) ? c : [c]

export class Route {
  constructor(app, apiPath) {
    this.app = app
    this.apiPath = apiPath
    this.router = new Router()
  }

  init() {
    // glob.sync(resolve(this.apiPath, './**/*.js')).forEach(require)
    // Todo: 待修复require.context不支持绝对路径问题
    const context = require.context('../routes', true, /\.js$/)
    context.keys().forEach(key => context(key))
    
    // 为所有中间件注册路由
    for (let [conf, controller] of routeMap) {
      const controllers = isArray(controller)
      const prefixPath = conf.target[symbolPrefix]
      if (prefixPath) prefixPath = normalizePath(prefixPath)
      const routerPath = prefixPath + conf.path
      this.router[conf.method](routerPath, ...controllers)
    }

    this.app.use(this.router.routes()).use(this.router.allowedMethods())
  }
}

// 如果是根路径就直接访问，如果不是就接着访问
const normalizePath = path => path.startsWith('/') ? path : `/${path}`

const router = conf => (target, key, descriptor) => {
  conf.path = normalizePath(conf.path)

  routeMap.set({
    target,
    ...conf
  }, target[key])

}

// export 利用symbol创建唯一值在类的原型上
export const controller = path => target => (target.prototype[symbolPrefix] = path)

export const get = path => router({
  method: 'get',
  path
})

export const post = path => router({
  method: 'post',
  path
})

export const put = path => router({
  method: 'put',
  path
})

export const del = path => router({
  method: 'delete',
  path
})

export const use = path => router({
  method: 'use',
  path
})

export const all = path => router({
  method: 'all',
  path
})

const decorate = (args, middleware) => {
  let [target, key, descriptor] = args

  target[key] = isArray(target[key])
  target[key].unshift(middleware)

  return descriptor
}

const convert = middleware => (...args) => decorate(args, middleware)

// const changeToArr = R.unless(
//   R.is(isArray),
//   R.of
// )

// const convert = middleware => (target, key, descriptor) => {
//   return (target, key, descriptor) => {
//     target[key] = R.compose(
//       R.concat(
//         changeToArr(middleware)
//       ),
//       changeToArr
//     )(target[key])
//   }
// }

export const auth = convert(async (ctx, next) => {
  console.log('进来auth装饰器了咩？')
  if (!!!ctx.session || !ctx.session.user) {
    return (ctx.body = {
      success: false,
      code: 401,
      err: '登录失效，重新登录'
    })
  }

  await next()
})

export const admin = roleExpected => convert(async (ctx, next) => {
  const { role } = ctx.session.user
  console.log('进来admin装饰器了咩？')
  // const rules = {
  //   admin: [1, 4, 5],
  //   superAdmin: [1, 2, 3, 4]
  // }

  if (!roel || role !== roleExpected) {
    return (ctx.body = {
      success: false,
      code: 403,
      err: '无权限'
    })
  }

  await next()
})

export const required = rules => convert(async (ctx, next) => {
  let errors = []

  const checkRules = R.forEachObjIndexed(
    (value, key) => {
      errors = R.filter(i => !R.has(i)(ctx.request[key]))(value)
    }
  )

  checkRules(rules)

  if (errors.length) {
    return (
      ctx.body = {
        success: false,
        code: 412,
        err: `${errors.join(',')} is required`
      }
    )
  }

  await next()
})

