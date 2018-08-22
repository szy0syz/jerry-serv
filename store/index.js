import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
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
      nuxtServerInit: async ({ commit, dispatch }, { req, res }) => {
        // TODO: 解决不能使用dispatch问题，英文文档规定必须返回一个promise ?
        // dispatch('fetchQiniuToken')
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
      article
    }
  })

export default store
