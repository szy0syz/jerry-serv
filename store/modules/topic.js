import Service from '../../services/topic'

const topic = {
  state: {
    topics: [],
    curtTopic: {
      title: '',
      cover: ''
    }
  },
  getters: {
    // 获取过滤后的状态
  },
  mutations: {
    // 同步操作
  },
  actions: {
    // 异步操作
    async getTopics({ state }, conds) {
      const res = await Service.getTopics({ $axios: this.$axios, conds })
      // TODO: 这里就不对异常处理，应该根据 http code 统一在 axios 拦截器中处理
      state.topics = res.data

      return res
    },

    async detailTopic({ state }, _id) {
      const res = await Service.detailTopic({ $axios: this.$axios, _id })

      state.curtTopic = res.data

      return res
    }

    // async postArticle({dispatch}, model) {
    //   const res = await Service.postArticle({ $axios: this.$axios, model })

    //   // 如果创建成功就刷新列表页数据
    //   if (res.success) {
    //     await dispatch('getArticles')
    //   }

    //   return res.data
    // },

    // async deleteArticle({state, dispatch}, _id) {
    //   const res = await Service.deleteArticles({ $axios: this.$axios, _id })

    //   if (res.success) {
    //     await dispatch('getArticles')
    //     state.curtArticle = res.data
    //   }

    //   return res.data
    // }
  }
}

export default topic
