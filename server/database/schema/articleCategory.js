const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleCategorySchema = new Schema({
  name: {
    type: String,
    required: true 
  }
})

mongoose.model('ArticleCateory', ArticleCategorySchema)
