export default function ({ store, error, isClient, redirect }) {
  // -------------  据说：必须加上isClient，不然服务端渲染会走一次，然后重定向去登录页 ？ -------------
  // console.log('@@store', store.getters.getToken)
  // console.log('前端middleware - isClient', isClient)
  if (!store.getters.token) {
    redirect('/login')
  }
}
