import fs from 'fs'
import { resolve } from 'path'
import mongoose from 'mongoose'
import config from '../config'
import R from 'ramda'

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

  mongoose.connect(config.db)

  mongoose.connection.on('disconnected', () => {
    mongoose.connect(config.db)
  })

  mongoose.connection.on('error', err => {
    console.error(err)
  })

  mongoose.connection.on('open', async () => {
    console.info('Connected to MongoDB ', config.db)

    // TODO
  })
}