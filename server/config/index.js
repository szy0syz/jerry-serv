import _ from 'lodash'
// import { resolve } from 'path'

const host = process.env.HOST || 'localhost'
const env = process.env.NODE_ENV || 'development'

// const confPath = resolve(__dirname, `./${env}.json`)

// 同步加载json配置文件
const conf = require(`./${env}.json`)

// 用lodash合并
export default _.assign({ env, host }, conf)