import xss from 'xss'
const { topic: TopicService } = require('../service')
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
    try {
      const data = await TopicService.fetchList(ctx.query)

      ctx.body = {
        success: true,
        data
      }
    } catch (error) {
      console.error(error)
      ctx.status = 500
      ctx.body = {
        success: false,
        error: error
      }
    }
  }

  @get('/:_id')
  async detail(ctx) {
    try {
      const { _id } = ctx.params

      const data = await TopicService.fetchDetail({ _id })

      ctx.body = {
        success: true,
        data
      }
    } catch (error) {
      console.error(error)
      ctx.status = 400
      ctx.body = {
        success: false,
        msg: '请求参数错误',
        error: error
      }
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
      data = await TopicService.create(data)
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
      data = await TopicService.update(data)
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
    try {
      const { _id } = ctx.params
      const data = await TopicService.remove(_id)

      ctx.body = {
        success: true,
        data
      }
    } catch (error) {
      console.error(error)
      ctx.status = 400
      ctx.body = {
        success: false,
        msg: '请求参数[_id]错误',
        error: error
      }
    }
  }
}
