const Router = require('koa-router')
const rest = require('./controller')

const router = new Router({ prefix: '/autoapi' })

function skipMid(ctx, next, str) {
  //是否设置跳过
  if (!router.skip || !router.skip[ctx.params.tab]) {
    return false
  }
  //是否全部跳过
  if (router.skip[ctx.params.tab] == 'ALL') {
    next()
    return true
  }
  //是否跳过一个
  if (router.skip[ctx.params.tab].split(',').indexOf(str) >= 0) {
    next()
    return true
  }
  return false
}

router
  .get('/:tab', rest.get)
  .post('/:tab', rest.post)

// router.get('/:tab', (ctx, next) => {
//   if (skipMid(ctx, next, 'GET')) {
//     return
//   }
//   console.log('进来了', skipMid(ctx, next, 'GET'))
//   rest.get(ctx, next)
// })

// router.use('/:tab').get(function(ctx, next) {
//   if (skipMid(ctx, next, 'GET')) {
//     return
//   }
//   rest.get(ctx, next)
// })

// rest.skip = {
//   'user': 'fetchID'  // 跳过对user资源的fetchID请求
// }

module.exports = router
