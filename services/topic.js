// TODO: 抽取到公共方法中
const parseConds = conds => {
  try {
    conds = JSON.stringify(conds)
  } catch (err) {
    conds = ''
    console.error(err)
  }

  return conds
}

class TopicService {
  getTopics({ $axios, conds }) {
    return $axios.$get(`/api/topic${conds ? '?' + parseConds(conds) : ''}`)
  }

  detailTopic({ $axios, _id }) {
    return $axios.$get(`/api/topic/${_id}`)
  }

  // postArticle({ $axios, model }) {
  //   return $axios.$post(`/api/topic`, model)
  // }

  putArticles({ $axios, model }) {
    return $axios.$put(`/api/topic`, model)
  }

  deleteTopic({ $axios, _id }) {
    return $axios.$delete(`/api/topic/${_id}`)
  }
}

export default new TopicService()