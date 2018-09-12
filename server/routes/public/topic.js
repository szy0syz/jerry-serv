const { topic: TopicService } = require('../../service')
const { controller, get } = require('../../lib/decorator')

@controller('/api/public/topic')
export class TopicController {
  @get('/fetch')
  async getTopics(ctx) {
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

  @get('/detail/:_id')
  async detailTopic(ctx) {
    const { _id } = ctx.params

    try {
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
}
