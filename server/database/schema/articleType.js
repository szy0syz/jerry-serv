const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleTypeSchema = new Schema({
  name: {
    type: String,
    required: true 
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

mongoose.model('ArticleType', ArticleTypeSchema)
