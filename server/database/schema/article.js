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

ArticleSchema.virtual('likeNum').get(function () {
  return this.likeList.length || 0
})

ArticleSchema.virtual('commentNum').get(function () {
  return this.commentList.length || 0
})

ArticleSchema.set('toJSON', { virtuals: true });
ArticleSchema.set('toObject', { virtuals: true });

// ArticleSchema.pre('find', function (next) {
//   console.log('我是pre方法1')
//   console.log(this)
//   next()
// })

mongoose.model('Article', ArticleSchema)
