import xss from 'xss'
import mongoose from 'mongoose'
const {
  controller,
  get,
  del,
  put,
  post,
  required
} = require('../../lib/decorator')

const SaleOrder = mongoose.model('SaleOrder')

@controller('/api/public/saleorder')
export class SaleOrderController {
  @get('/')
  async getSaleOrder(ctx) {
    try {
      const data = await SaleOrder.fetch(ctx.query)
      ctx.body = {
        success: true,
        data
      }
    } catch (err) {
      console.error(err)
      ctx.status = 400
      ctx.body = {
        success: false,
        msg: '请求参数有误'
      }
    }
  }

  @get('/:_id')
  @required({
    params: ['_id']
  })
  async detailSaleOrder(ctx) {
    const { _id } = ctx.params

    try {
      const data = SaleOrder.detail(_id)
      ctx.body = {
        success: true,
        data
      }
    } catch (err) {
      console.error(err)
      ctx.status = 400
      ctx.body = {
        success: false,
        msg: '请求参数有误'
      }
    }
  }

  @post('/')
  @required({
    body: ['type', 'customer', 'creator', 'content']
  })
  async createSaleOrder(ctx) {
    let data = ctx.request.body
    //TODO: 校验
    data = {
      type: xss(data.type),
      customer: {
        id: xss(data.customer.id),
        name: xss(data.customer.name)
      },
      creator: data.creator,
      content: data.content
    }

    try {
      data = await SaleOrder.create(data)

      ctx.body = {
        data,
        success: true
      }
    } catch (err) {
      console.error(err)
      ctx.status = 400
      ctx.body = {
        data,
        msg: '请求参数有误，无法创建销售订单'
      }
    }
  }
}
