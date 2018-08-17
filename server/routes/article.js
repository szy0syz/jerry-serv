import xss from 'xss'

const { article: Article } = require('../service')

const { controller, get, del, post, required } = require('../lib/decorator')

@controller('/api/article')
export class articleController {
  @get('/')
  async get(ctx) {
    const { page, size } = ctx.query
    const data = await Article.fetchList(page, size)
    ctx.body = {
      success: true,
      data
    }
  }

  @post('/')
  async post(ctx) {
    let data = ctx.request.body
    if(!data.pubdate) {
      data.pubdate = Date.now()
    }
    data = {
      title: xss(data.title),
      desc: xss(data.desc),
      cover: xss(data.cover),
      pubdate: xss(data.pubdate),
      content: xss(data.content),
      type: xss(data.type),
      status: xss(data.status),
      openness: xss(data.openness),
      password: xss(data.password),
      isTop: Boolean(data.isTop),
      tags: data.tags
    }

    try {
      data = await Article.create(data)
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
}
