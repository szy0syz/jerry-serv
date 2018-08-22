import axios from '../plugins/axios2'

class QiniuService {
  fetchToken() {
    return axios.get('/api/qiniu/token')
  }
}

export default new QiniuService()