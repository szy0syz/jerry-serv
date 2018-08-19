import request from 'request-promise'

const base = ' https://api.weixin.qq.com/sns/'
const api = {
  authorize: 'https://open.weixin.qq.com/connect/oauth2/authorize?',
  accessToken: base + 'oauth2/access_token?',
  userInfo: base + 'userinfo?'
}

export default class WechatOAuth {
  constructor(opts) {
    this.appID = opts.appID
    this.appSecret = opts.appSecret
  }

  async request(options) {
    options = Object.assign({}, options, { json: true })
    try {
      const response = await request(options)
      console.log('WechatOAuth中request函数的response: \n', response)
      return response
    } catch (err) {
      console.error(err)
    }
  }

  // scope为snsapi_base 安默，不需要用户点击同意，但只能拿到用户openID
  // scope为snsapi_userinfo 显示授权，需要用户点击同意，却能拿到用户信息
  // 生成申请用户授权的URL
  getAuthorizeURL(scope = 'snsapi_base', target, state) {
    const url = `${api.authorize}appid=${
      this.appID
    }&redirect_uri=${encodeURIComponent(
      target
    )}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`

    return url
  }

  // 通过code换取网页授权access_token
  async fetchAccessToken(code) {
    const url = `${api.accessToken}appid=${this.appID}&secret=${
      this.appSecret
    }&code=${code}&grant_type=authorization_code`
    const data = await this.request({ url })

    return data
  }

  async getUserInfo(token, openID, lang = 'zh_CN') {
    const url = `${
      api.userInfo
    }access_token=${token}&openid=${openID}&lang=${lang}`
    const data = await this.request({ url })

    return data
  }
}
