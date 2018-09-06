import Service from '../../services/article'

const article = {
  state: {
    articles: [],
    curtArticle: {
      title: '',
      cover: ''
    }
  },
  getters: {
    // TODO: 节省时间，后续再补上
  },
  mutations: {
    // 同步操作
  },
  actions: {
    // 异步操作
    async getArticles({state}, conds) {
      const res = await Service.getArticles({ $axios: this.$axios, conds })
      state.articles = res.data
      
      return res
    },

    async detailArticle({state}, _id) {
      const res = await Service.detailArticle({ $axios: this.$axios, _id })

      state.curtArticle = res.data

      return res
    },

    async postArticle({dispatch}, model) {
      const res = await Service.postArticle({ $axios: this.$axios, model })

      // 如果创建成功就刷新列表页数据
      if (res.success) {
        await dispatch('getArticles')
      }

      return res.data
    },

    async deleteArticle({state, dispatch}, _id) {
      const res = await Service.deleteArticles({ $axios: this.$axios, _id })

      if (res.success) {
        await dispatch('getArticles')
        state.curtArticle = res.data
      }

      return res.data
    }
  }
}

export default article
