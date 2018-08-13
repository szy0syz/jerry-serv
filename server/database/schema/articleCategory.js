const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
  name: {
    type: String,
    required: true 
  }
})

mongoose.model('Article', ArticleSchema)