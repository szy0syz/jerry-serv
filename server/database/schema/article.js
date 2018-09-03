const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { Mixed, ObjectId } = Schema.Types

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  cover: String,
  desc: String,
  pubdate: {
    type: Date,
    default: Date.now()
  },
  content: String,
  status: Number,
  openness: String,
  isTop: Boolean,
  password: String,
  type: {
    type: ObjectId,
    ref: 'ArticleType'
  },
  author: {
    type: ObjectId,
    ref: 'User'
  },
  tags: [
    {
      type: ObjectId,
      ref: 'ArticleTag'
    }
  ],
  likeList: [
    {
      username: String,
      avatar: String,
      userid: String,
      meta: {
        createdAt: {
          type: Date,
          default: Date.now()
        },
        updatedAt: {
          type: Date,
          default: Date.now()
        }
      }
    }
  ],
  commentList: [
    {
      username: String,
      avatar: String,
      userid: String,
      content: String,
      meta: {
        createdAt: {
          type: Date,
          default: Date.now()
        },
        updatedAt: {
          type: Date,
          default: Date.now()
        }
      }
    }
  ],
  clickNum: {
    type: Number,
    default: 0
  },
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

ArticleSchema.virtual('likeNum').get(function() {
  return this.likeList.length || 0
})

ArticleSchema.virtual('commentNum').get(function() {
  return this.commentList.length || 0
})

ArticleSchema.set('toJSON', { virtuals: true })
ArticleSchema.set('toObject', { virtuals: true })

// 类的静态方法
ArticleSchema.static = {
  async addLiker(params) {
    // [_id: article id]
    const { _id, username, avatar, userid } = params

    let entity = await Article.findOne({ _id }, { __v: 0 }).exec()
    entity.likeList.push({ username, avatar, userid })
    entity = await entity.save()

    return entity
  },
  async subLier(params) {
    const { _id, username, userid } = params
    let entity = await Article.findOne({ _id }, { __v: 0 }).exec()

    // 需要取消点赞的subdocument的_id
    let targetId = null

    // 遍历subdocument 找到目标id
    entity.likeList.some(i => {
      const result = i.username === username || i.userid === userid
      if (result) {
        targetId = i._id
      }
      return result
    })

    return entity
  }
}

mongoose.model('Article', ArticleSchema)
