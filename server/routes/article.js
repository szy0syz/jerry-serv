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

    data = {
      title: xss(data.title),
      cover: xss(data.title),
      pubdate: xss(data.pubdate),
      content: xss(data.content)
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
