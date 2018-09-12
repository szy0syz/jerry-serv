import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import querystring from 'querystring'
import topic from './modules/topic'
import article from './modules/article'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      name: ''
    },
    getters: {
    },
    mutations: {},
    actions: {
      nuxtServerInit: async ({ commit, dispatch }, { req }) => {
        // TODO: 解决不能使用dispatch问题，英文文档规定必须返回一个promise ?
        // dispatch('fetchQiniuToken')

        // cookie[TOKEN]仅在 [/login] 提交并保存到store中
        let cookies = req.headers.cookie
        cookies = cookies ? querystring.parse(cookies, '; ') : {}
        if (cookies && cookies.TOKEN) {
          commit('SET_TOKEN', cookies.TOKEN)
          console.log('cookies.TOKEN~~~~', cookies.TOKEN)
        }
        
        if (!!req.session && !!req.session.user && !!req.session.user.token) {
          commit('LOGIN', req.session)
        } else {
          commit('LOGOUT')
        }
      }
    },
    modules: {
      app,
      user,
      topic,
      article
    }
  })

export default store
