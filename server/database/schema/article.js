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
  category: {
    type: ObjectId,
    ref: 'Category'
  }
})

mongoose.model('Article', ArticleSchema)
