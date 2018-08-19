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
      await Article.addLiker(params)

      ctx.body = {
        msg: '点赞成功',
        success: true
      }
    } catch (error) {
      ctx.body = {
        error,
        success: false
      }
      console.error(error)
    }
  }

  @post('/unlike')
  async postUnLike(ctx) {
    // must contain: _id, username, userid
    let params = ctx.request.body

    try {
      await Article.subLiker(params)

      ctx.body = {
        msg: '取消点赞',
        success: true
      }
    } catch (error) {
      ctx.body = {
        error,
        success: false
      }
      console.error(error)
    }
  }

  @post('/comment')
  async postComment(ctx) {
    // must contain: _id, username, userid, avatar, content
    let params = ctx.request.body

    try {
      const data = await Article.addComment(params)

      ctx.body = {
        msg: '评论成功',
        success: true
      }
    } catch (error) {
      ctx.body = {
        error,
        success: false
      }
      console.error(error)
    }
  }
}
