import xss from 'xss'
const { topic: Topic } = require('../service')
const {
  controller,
  get,
  del,
  put,
  post,
  required
} = require('../lib/decorator')

@controller('/api/topic')
export class topicController {
  @get('/')
  async get(ctx) {
    // const { page, size, type } = ctx.query
    const data = await Topic.fetchList(ctx.query)
    ctx.body = {
      success: true,
      data
    }
  }

  @get('/:_id')
  async detail(ctx) {
    const { _id } = ctx.params

    const data = await Topic.fetchDetail({ _id })

    ctx.body = {
      success: true,
      data
    }
  }

  @post('/')
  @required({
    body: ['title', 'content']
  })
  async post(ctx) {
    let data = ctx.request.body

    if (!data.pubdate) {
      data.pubdate = Date.now()
    }

    // TODO: 修正业务逻辑-根据不同角色用户改变status

    // 默认提交则自动审核
    if (data.status === 1) {
      data.status = 9
    }

    data = {
      title: xss(data.title),
      desc: xss(data.desc),
      cover: xss(data.cover),
      pubdate: xss(data.pubdate),
      content: xss(data.content),
      status: xss(data.status),
      openness: xss(data.openness),
      password: xss(data.password),
      canComment: Boolean(data.canComment),
      author: xss(data.author)
      // to test
      // likeList: data.likeList
    }

    try {
      data = await Topic.create(data)
      ctx.body = {
        data,
        success: true
      }
    } catch (err) {
      ctx.body = {
        err,
        success: false
      }
    }
  }

  @put('/')
  async put(ctx) {
    let data = ctx.request.body
    // TODO: 修正业务逻辑-根据不同角色用户改变status

    // 默认提交则自动审核
    if (data.status === 1) {
      data.status = 9
    }

    data = {
      _id: xss(data._id),
      title: xss(data.title),
      desc: xss(data.desc),
      cover: xss(data.cover),
      pubdate: xss(data.pubdate),
      content: xss(data.content),
      status: xss(data.status),
      openness: xss(data.openness),
      password: xss(data.password),
      canComment: Boolean(data.canComment)
    }

    try {
      data = await Topic.update(data)
      ctx.body = {
        data,
        success: true
      }
    } catch (error) {
      ctx.body = {
        error,
        success: false
      }
    }
  }

  @del('/:_id')
  async delete(ctx) {
    const { _id } = ctx.params
    const data = await Topic.remove(_id)

    ctx.body = {
      success: true,
      data
    }
  }
}
