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
        let pro = await dispatch('fetchQiniuToken')
        console.log(pro)
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
