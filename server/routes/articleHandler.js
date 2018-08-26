import xss from 'xss'
import mongoose from 'mongoose'

const { article: ArticleService } = require('../service')

const { controller, get, del, put, post, required } = require('../lib/decorator')
const Article = mongoose.model('Article')
const ArticleType = mongoose.model('ArticleType')

@controller('/api/articleHandler')
export class articleHandlerController {
  @post('/like')
  async postLike(ctx) {
    // must contain: _id, username, userid
    let params = ctx.request.body
    try {
      await ArticleService.addLiker(params)

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
      await ArticleService.subLiker(params)

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
      const data = await ArticleService.addComment(params)

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

  @get('/homeArticles')
  async getHomeArticles(ctx) {
    // TODO: redis缓存公共业务数据，不能让ODM每次都去查
    const groupType = await ArticleType.findOne({ name: '集团新闻' })
    const filter = { __v: 0, password: 0, content: 0 }
    // 查询 置顶文章
    let topArticles = await Article
      .find({ status: 9, isTop: true }, filter)
      .sort({ '_id': -1 })
      .limit(4)
      .populate({ path: 'type', select: 'name' })
      .populate({ path: 'tags', select: 'name' })
      .populate({ path: 'author', select: '_id username avatar' })

    // 查询 最新文章：审核状态 and 不等于[集团新闻]类别 and 不是轮播文章
    let latestArticles = await Article
      .find({ status: 9, type: { $ne: groupType._id }, isTop: false }, filter)
      .sort({ '_id': -1 })
      .limit(4)
      .populate({ path: 'type', select: 'name' })
      .populate({ path: 'tags', select: 'name' })
      .populate({ path: 'author', select: '_id username avatar' })

    // 查询 集团新闻
    let groupArticles = await Article
      .find({ status: 9, type: groupType._id, isTop: false }, filter)
      .sort({ '_id': -1 })
      .limit(4)
      .populate({ path: 'type', select: 'name' })
      .populate({ path: 'tags', select: 'name' })
      .populate({ path: 'author', select: '_id username avatar' })

    ctx.body = {
      success: true,
      data: {
        topArticles,
        latestArticles,
        groupArticles
      }
    }
  }

  @get('/groupArticles')
  async getHomeArticles(ctx) {
    // let data = await Article
    // .aggregate([
    //   { $match: { status: 9 } },
    //   { $group: { _id: '$type', articles: {$push: '$$ROOT'}} },
    //   { $project: { 'articles.likeNum': { $size: '$likeList' } ,'articles.isTop': 0, 'articles.openness': 0, 'articles.author': 0, 'articles.type': 0, 'articles.__v': 0, 'articles.content': 0, 'articles.password': 0, 'articles.tags': 0}}
    // ])

    let data = await Article
      .aggregate([
        { $match: { status: 9 } },
        {
          $group: {
            _id: '$type', articles: {
              $push: {
                title: '$title',
                desc: '$desc',
                cover: '$cover',
                clickNum: '$clickNum',
                likeNum: { $size: '$likeList' },
                commentNum: { $size: '$commentList' },
                pubdate: '$pubdate'
              }
            }
          }
        }
      ])

    data = await Article.populate(data, {
      path: '_id',
      model: 'ArticleType',
      select: '_id name'
    })

    ctx.body = {
      success: true,
      data
    }
  }
}
