import xss from 'xss'

const { article: Article } = require('../service')

const { controller, get, del, put, post, required } = require('../lib/decorator')

@controller('/api/articleHandler')
export class articleHandlerController {
  @post('/like')
  async postLike(ctx) {
    // must contain: _id, username, userid
    let params = ctx.request.body
    try {
      const data = await Article.addLiker(params)

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

  @post('/comment')
  async postLike(ctx) {
    // must contain: _id, username, userid, avatar, content
    let params = ctx.request.body
    try {
      const data = await Article.addComment(params)

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
