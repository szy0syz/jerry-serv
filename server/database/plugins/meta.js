module.exports = exports = function MetaPlugin(schema, options) {

  schema.pre('save', function (next) {
    if (this.isNew) {
      this.meta = {} // 不能给访问undefined的属性
      this.meta.createdAt = this.meta.updatedAt = Date.now()
    } else {
      this.meta.updatedAt = Date.now()
    }

    next()
  })
}
