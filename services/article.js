const parseConds = conds => {
  try {
    conds = JSON.stringify(conds)
  } catch (err) {
    conds = ''
    console.error(err)
  }

  return conds
}

class ArticleService {
  getArticles({ $axios, conds }) {
    return $axios.$get(`/api/article${conds ? '?' + parseConds(conds) : ''}`)
  }

  detailArticle({ $axios, _id }) {
    return $axios.$get(`/api/article/${_id}`)
  }

  postArticle({ $axios, model }) {
    return $axios.$post(`/api/article`, model)
  }

  putArticles({ $axios, model }) {
    return $axios.$put(`/api/article`, model)
  }

  deleteArticles({ $axios, _id }) {
    return $axios.$delete(`/api/article/${_id}`)
  }
}

export default new ArticleService()