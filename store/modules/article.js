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
      const res = await Service.getArticles(conds)

      state.articles = res.data.data
      
      return res
    },

    async detailArticle({state}, _id) {
      const res = await Service.detailArticle(_id)

      state.curtArticle = res.data.data

      return res
    },

    async postArticle({dispatch}, model) {
      const res = await Service.postArticle(model)

      // 如果创建成功就刷新列表页数据
      if (res.data.success) {
        await dispatch('getArticles')
      }

      return res.data.data
    },

    async deleteArticle({state}, _id) {
      const res = await Service.deleteArticles(_id)

      state.curtArticle = res.data.data

      return res
    },
  }
}

export default article
