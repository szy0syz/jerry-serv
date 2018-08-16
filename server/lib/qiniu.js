import qiniu from 'qiniu'
import config from '../config'
import { exec } from 'shelljs'

// qiniu.conf.ACCESS_KEY = config.qiniu.AK
// qiniu.conf.SECRET_KEY = config.qiniu.SK

// const bucket = config.qiniu.bucket

const mac = new qiniu.auth.digest.Mac(config.qiniu.AK, config.qiniu.SK)
let options = {
  scope: config.qiniu.bucket
}

let putPolicy = new qiniu.rs.PutPolicy(options)

const uploadToken = putPolicy.uploadToken(mac)

// "qiniu": "^7.1.3" // 太新了，装6.1.13
// 7.1.3 方式
// let mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
// let config = new qiniu.conf.Config()
// config.useHttpsDomain = true
// config.zone = qiniu.zone.Zone.z2
// let bucketManager = new qiniu.rs.BucketManager(mac, config)

export const uptoken = (key) => {
  // return new qiniu.rs.PutPolicy(`${bucket}:${key}`).token()
  return uploadToken
}

export const fetchImage = async (url, key) => {
  // const client = new qiniu.rs.Client()

  return new Promise((resolve, reject) => {
    // client.fetch(url, bucket, key, (err, ret) => {
    //   if (err) reject(err)
    //   else resolve(ret)
    // })

    const bash = `qshell fetch ${url} ${config.qiniu.bucket} ${key}`
    const child = exec(bash, { async: true })
    child.stdout.on('data', data => {
      resolve(data)
    })
  })
}
