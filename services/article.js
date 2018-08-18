import axios from '../plugins/axios2'

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
  getArticles(conds) {
    return axios.get(`/api/article${conds ? '?' + parseConds(conds) : ''}`)
  }

  postArticle(model) {
    return axios.post(`/api/article`, model)
  }

  putArticles(model) {
    return axios.put(`/api/article`, model)
  }

  deleteArticles(_id) {
    return axios.delete(`/api/article${_id}`)
  }
}

export default new ArticleService()