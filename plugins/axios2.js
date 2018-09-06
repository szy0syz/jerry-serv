/**
 * 用于浏览器端ajax请求
 */

import Axios from 'axios'
import { Message } from 'iview'

// 环境变量
const env = process.env.NODE_ENV || 'development'

let baseURL = {
  development: 'http://127.0.0.1:3000',
  test: 'http://127.0.0.1:3003',
  production: 'https://yncyzj.cn'
}

let options = {
  baseURL: baseURL[env],
  timeout: 5000,
  responseType: 'json',
  headers: {
    post: {
      'Content-Type': 'application/json'
    },
    common: {
      'Authorization': ''
    }
  }
}

// 跳过服务端渲染时执行，在客户端时再执行
// 从web拿到TOKEN
if (process.browser) { 
  options.headers.common = {
    'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`
  }
}

// 创建实例
let axios = Axios.create(options)

// 拦截
axios.interceptors.response.use(
  res => {
    if (res.status && res.status === 200 && res.data.status === 'error') {
      return
    }
    return res
  },
  err => {
    // const status = err.response.status
    // let config = { content: err.response.data.msg || '' }
    // switch (status) {
    //   case 401:
    //     config = {
    //       duration: 3
    //     }
    //     break;
    
    //   default:
    //     break;
    // }
    if (status !== 200) {
      if (process.client) {
        Message.error({
          content: err.response.data.msg || '',
          duration: 3
        })

      }
    }
    return Promise.resolve(err.response)
  }
)
export default axios
