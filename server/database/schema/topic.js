const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = Schema.Types

// 专题 schema
const TopicSchema = new Schema({
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
  password: String,
  author: {
    type: ObjectId,
    ref: 'User'
  },
  // 是否允许评论
  canComment: {
    type: Boolean,
    default: false,
  },
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

// 只有评论数
TopicSchema.virtual('commentNum').get(function() {
  return this.commentList.length || 0
})

// 转换时虚拟字段也带
TopicSchema.set('toJSON', { virtuals: true })
TopicSchema.set('toObject', { virtuals: true })

// class static methods
TopicSchema.static = {
  async addComment(params) {
    const { _id, username, userid, avatar, content } = params

    let entity = await this.findOne({ _id }, { __v: 0 }).exec()

    entity.commentList.push({ username, userid, avatar, content })
    // use mongoose middleware generate subdocument { createdAt, updatedAt }
    entity = await entity.save()
    
    return entity
  }
}

mongoose.model('Topic', TopicSchema)
