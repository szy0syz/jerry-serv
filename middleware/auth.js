export default function ({ store, redirect, $axios }) {
  // 不要在node环境中验证token，要不然token存在客服端，ssr环境拿不到啊!
  // 也就是说，只在客户端环境中验证nuxt-auth中间件
  if (process.client) {
    // console.log('process.client在授权中间件~~~~~token', store.state.user.token)
    if (!store.state.user.token) {
      console.log('我在false里')
      redirect('/login')
    }
  }
}
