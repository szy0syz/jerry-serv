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

    // TODO: 
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
      console.info('[Info] 写入管理员数据初始化数据')
    }
    await user.save()

    ////////////////
    const ArticleType = mongoose.model('ArticleType')
    const typeLenght = await ArticleType.find().count().exec()

    if (typeLenght === 0) {
      let typeList = [
        {
          name: '产业职教'
        },
        {
          name: '校企合作'
        },
        {
          name: '校园安全'
        },
        {
          name: '资源干货'
        }
      ]
      await ArticleType.insertMany(typeList)
      console.info('[Info] 写入ArticleType初始化数据')
    }
  })
}