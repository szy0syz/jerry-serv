import xss from 'xss'
const dayjs = require('dayjs')
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const { ObjectId, Number } = Schema.Types

// 销售订单 Schema
const SaleOrderSchema = new Schema({
  number: {
    type: Number,
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

SaleOrderSchema.static = {
  async create(model) {
    let entity = new this(model)
    entity = await entity.save()

    return entity
  },

  async remove(_id) {
    const entity = await this.remove({ _id })
    return entity
  },

  async update(model) {
    try {
      let entity = await this.findOne({ _id: model._id }).exec()

      if (entity) {
        delete model._id
        entity = Object.assign(entity, model)
        entity = await entity.save()

        return entity
      } else {
        return false
      }
    } catch (err) {
      console.error(err)
      return false
    }
  },

  async fetch(params) {
    const { page = 1, size = 20 } = params
    let data = await this
      .find({}, { __v: 0 })
      .skip((page - 1) * size)
      .limit(Number(size))
      .sort({ '_id': -1 })
      .populate({ path: 'author', select: '_id username avatar' })
      .exec()

    return data
  },

  async detail(params) {
    const { _id } = params
    try {
      const data = this.findOne({_id}).exec()

      return data
    } catch(err) {
      console.error(err)
      return false
    }
  }
}

mongoose.model('SaleOrder', SaleOrderSchema)
