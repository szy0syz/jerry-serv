const mongoose = require('mongoose')
const Schema = mongoose.Schema

const getModel = function (tab) {
  let model
  try {
    model = mongoose.model(tab)
  } catch (error) {
    model = mongoose.model(tab, new Schema({}, { strict: false }))
  }
  return model
}

export const get = async (ctx, next) => {
  let where = ctx.query._where
  const sort = ctx.query._sort || {}
  const skip = parseInt(ctx.query._skip, 10) || 0
  const limit = parseInt(ctx.query._limit, 10) || 100
  const populate = ctx.query._populate || ''
  if (where) {
    where = JSON.parse(where)
    for (var key in where) {
      if (where[key]._regex) {
        where[key] = new RegExp(where[key]._regex)
      }
      if (where[key]._lt) {
        where[key].$lt = where[key]._lt
        delete where[key]._lt
      }
      if (where[key]._lte) {
        where[key].$lte = where[key]._lte
        delete where[key]._lte
      }
      if (where[key]._gt) {
        where[key].$gt = where[key]._gt
        delete where[key]._gt
      }
      if (where[key]._gte) {
        where[key].$gte = where[key]._gte
        delete where[key]._gte
      }
      if (where[key]._ne) {
        where[key].$ne = where[key]._ne
        delete where[key]._ne
      }
    }
  }

  //查询 - 根据：tab
  const data = await getModel(ctx.params.tab)
    .find(where)
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .populate(populate)
    .exec()

  ctx.body = ({
    success: 'true',
    data
  })
}

export const post = async function (ctx, next) {
  const Model = getModel(req.params.tab)
  const doc = ctx.request.body
  const entity = new Model(doc)
  const data = await entity.save()
  ctx.body = {
    success: true,
    data
  }
}