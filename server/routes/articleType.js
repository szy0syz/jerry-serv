import xss from 'xss'

// const { fetchList, create } = require('../service/article')

const { controller, get, del, post } = require('../lib/decorator')

@controller('/api/article')
export class articleController {
  @get('/')
  async get(ctx) {
    const { page, size } = ctx.query
    const data = await fetchList(page, size)
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
      data = await create(data)
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
