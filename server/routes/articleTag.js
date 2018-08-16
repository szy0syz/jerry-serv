import xss from 'xss'

const { articleTag: Model } = require('../service')

const { controller, get, del, post } = require('../lib/decorator')

@controller('/api/articleTag')
export class articleController {
  @get('/')
  async get(ctx) {
    const { page, size } = ctx.query
    const data = await Model.fetchList(page, size)
    ctx.body = {
      success: true,
      data
    }
  }

  @post('/')
  async post(ctx) {
    let data = ctx.request.body

    data = {
      name: xss(data.name)
    }

    try {
      data = await Model.create(data)
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
}
