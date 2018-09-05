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

// class static methods
ArticleSchema.static = {
  async addLiker(params) {
    // [_id: article id]
    const { _id, username, avatar, userid } = params

    let entity = await this.findOne({ _id }, { __v: 0 }).exec()
    entity.likeList.push({ username, avatar, userid })
    entity = await entity.save()

    return entity
  },
  
  async subLier(params) {
    const { _id, username, userid } = params
    let entity = await this.findOne({ _id }, { __v: 0 }).exec()

    // will removed subdocment's id
    let targetId = null

    // find targetId with map subdocuments array
    entity.likeList.some(i => {
      const result = i.username === username || i.userid === userid
      if (result) {
        targetId = i._id
      }
      return result
    })

    // remove subDocument
    entity.likeList.id(targetId).remove() // not a promise
    entity = await entity.save()

    return entity
  },

  async addComment(params) {
    const { _id, username, userid, avatar, content } = params

    let entity = await this.findOne({ _id }, { __v: 0 }).exec()

    entity.commentList.push({ username, userid, avatar, content })
    // use mongoose middleware generate subdocument { createdAt, updatedAt }
    entity = await entity.save()
    
    return entity
  }
}

mongoose.model('Article', ArticleSchema)
