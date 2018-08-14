import fs from 'fs'
import { resolve } from 'path'
import mongoose from 'mongoose'
import config from '../config'

// loading mogoose "meta" plugins
mongoose.plugin(require('../database/plugins/meta'))

const modelDir = resolve(__dirname, '../database/schema')

// fs
//   .readdirSync(modelDir)
//   .filter(file => ~file.search(/\.js$/))    // only .js file
//   .forEach(file => require(resolve(modelDir, file)))

const context = require.context('../database/schema', true, /\.js$/)
context.keys().forEach(key => context(key))

export const database = app => {
  mongoose.set('debug', true)

  mongoose.connect(config.db, { useNewUrlParser: true })

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.db)
  })

  mongoose.connection.on('error', err => {
    console.error(err)
  })

  mongoose.connection.on('open', async () => {
    console.info('Connected to MongoDB ', config.db)

    // TODO
    const User = mongoose.model('User')
    let user = await User.findOne({
      username: 'admin'
    }).exec()

    if (!user) {
      user = new User({
        username: 'admin',
        password: 'admin888',
        email: 'admin@126.com'
      })
      console.info('[Info] 写入初始化管理员数据')
    }

    await user.save()
  })
}