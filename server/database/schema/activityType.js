const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ActivityTypeSchema = new Schema({
  name: {
    type: String,
    required: true 
  },
  desc: String,
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

mongoose.model('ActivityType', ActivityTypeSchema)
