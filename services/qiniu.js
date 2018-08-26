import axios from '../plugins/axios2'

class QiniuService {
  async fetchToken() {
    const data = await axios.get('/api/qiniu/token')
    return data.data.data.token
  }
}

export default new QiniuService()