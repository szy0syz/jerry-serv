import axios from '../plugins/axios2'
// 下个版本弃用
class QiniuService {
  async fetchToken() {
    const data = await axios.get('/api/qiniu/token')
    return data.data.data.token
  }
}

export default new QiniuService()