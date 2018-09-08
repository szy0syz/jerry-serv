module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-temp',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', name: 'iview', href: '/styles/iview.css' },
      { rel: 'stylesheet', name: 'theme', href: '' }
    ]
  },
  css: [
    { src: '~assets/css/main.css' },
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
    // { src: 'iview/dist/styles/iview.css' }
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    timeout: 5000,
    responseType: 'json'
  },
  plugins: [
    { src: '~plugins/flexible.js', ssr: false },
    { src: '~plugins/iview.js', ssr: true },
    { src: '~/plugins/axios' },
    { src: '~/plugins/quillEditor.js', ssr: false }
  ],
  loading: './components/loading.vue',
  env: {
    NODE_ENV: process.env.NODE_ENV || 'prodev'
  },
  cache: {
    max: 1000,
    maxAge: 900000
  },
  router: {
    middleware: ['route', 'auth'] // 在每页渲染前运行 middleware/route.js 中间件的逻辑
  },
  build: {
    // babel: {  // 前端不需要修饰器，后端才要
    //   plugins: ['babel-plugin-transform-decorators-legacy']
    // },
    vendor: ['axios', 'iview', './plugins/iview.js'],
    extend(config, ctx) {
      // if (ctx.isClient) {
      if (process.client) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  }
}
