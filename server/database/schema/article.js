const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { Mixed, ObjectId } = Schema.Types

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  cover: String,
  pubdate: Date,
  content: String,
  type: {
    type: ObjectId,
    ref: 'ArticleType'
  },
  tags: [
    {
      type: ObjectId,
      ref: 'ArticleTag'
    }
  ],
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

mongoose.model('Article', ArticleSchema)
