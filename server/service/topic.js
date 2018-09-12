import mongoose from 'mongoose'
const Topic = mongoose.model('Topic')

export async function fetchList(params) {
  const { page = 1, size = 20 } = params
  // TODO: handle params
  let where = {}

  const data = await Topic.find(where, { __v: 0, password: 0, content: 0 })
    .skip((page - 1) * size)
    .limit(Number(size))
    .sort({ _id: -1 })
    .populate({ path: 'author', select: '_id username avatar' })
    .exec()

  return data
}

export async function fetchDetail({ _id }) {
  // TODO: [急]待优化fetchDetail时又自增又lean()问题
  let entity = await Topic.findOne({ _id }, { __v: 0 }).lean()
  let model = await Topic.findOne({ _id }, { __v: 0 })
  console.log('!~~~~~~~~!')
  console.log(model)
  //////////// 待优化
  // TODO: 修复lean()方法不包含虚拟字段问题(上中间件mongoose-lean-virtuals还是自己写？)
  model.clickNum++
  entity.commentNum = model.commentNum
  ////////////
  model.save()

  return entity
}

export async function create(model) {
  model = new Topic(model)
  model = await model.save()

  return model
}

export async function update(model) {
  try {
    let entity = await Topic.findOne({ _id: model._id }).exec()

    //TODO: no data

    delete model._id
    entity = Object.assign(entity, model)
    entity = await entity.save()

    return entity
  } catch (err) {
    console.error(err)
  }
}

export async function remove(_id) {
  const res = await Topic.remove({ _id })
  return res
}

export async function addComment(params) {
  const data = await Topic.addComment(params)

  return data
}
