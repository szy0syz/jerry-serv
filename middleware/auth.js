export default function ({ store, redirect, req }) {
  // 不要在node环境中验证token，要不然token存在客服端，ssr环境拿不到啊!
  // 也就是说，只在客户端环境中验证nuxt-auth中间件
  // if (process.client) {
  //   // console.log('process.client在授权中间件~~~~~token', store.state.user.token)
  // }

  //let cookies = req.headers.cookie
  // cookies = cookies ? querystring.parse(cookies, '; ') : {}
  // if (cookies && cookies.TOKEN) {
  //   console.log('cookies.TOKEN~~~~ auth middleware', cookies.TOKEN)
  // }
  // console.log('~~~store.state.user.isAuth', store.state.user.isAuth)
  // if (!store.state.user.token) {
  //   redirect('/login')
  // }

  // if在ssr但却没有req  -->  就是 跳过 nuxt generate 
  if (process.server && !req) return

  // if (process.server) {
  //   console.log('req.headers.cookie~~~~~~~', req)
  // }
  // clinet request
  if (!process.server) {
    console.log('in client ---- store.state.app.isAuthc', store.state.app.isAuthc)
    // const isAuthc = store.state.app.isAuthc
    // if (!isAuthc) redirect('/login')
  }

  // console.log('process.server', process.server ,'到我执行?', Date.now())
}
