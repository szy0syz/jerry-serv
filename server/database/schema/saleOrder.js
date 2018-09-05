const mongoose = require('mongoose')
const dayjs = require('dayjs')
const Schema = mongoose.Schema
const { ObjectId } = Schema.Types

// 销售订单 Schema
const SaleOrderSchema = new Schema({
  number: {
    type: Schema.Types.Number,
    required: true,
    default: `SO${dayjs().format('YYYYMMDDmmssSSS')}`
  },
  type: {
    type: String,
    required: true,
  },
  customer: {
    id: String,
    name: String
  },
  creator: {    // 外链本系统用户
    type: ObjectId,
    ref: 'User'
  },
  content: [
    {
      mid: {
        type: String,
        required: true
      },
      mname: {
        type: String,
        required: true
      },
      mmodel: {
        type: String,
        required: true
      },
      qty: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: true
      }
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

// class static methods
ArticleSchema.static = {}

mongoose.model('SaleOrderSchema', SaleOrderSchema)
