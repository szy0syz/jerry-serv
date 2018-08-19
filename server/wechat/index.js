// 对微信异步场景初始化
import mongoose from 'mongoose'
import config from '../config'
import Wechat from '../wechat-lib'
import WechatOAuth from '../wechat-lib/oauth'

const Token = mongoose.model('Token')
const Ticket = mongoose.model('Ticket')

const wechatConfig = {
  wechat: {
    appID: config.wechat.appID,
    appSecret: config.wechat.appSecret,
    token: config.wechat.token,
    // [eslint]Redundant use of `await` on a return value.
    getAccessToken: async () => {
      const res = await Token.getAccessToken()
      return res
    },
    saveAccessToken: async data => {
      const res = await Token.saveAccessToken(data)
      return res
    },
    getTicket: async () => {
      const res = await Ticket.getTicket()
      return res
    },
    saveTicket: async data => {
      const res = await Ticket.saveTicket(data)
      return res
    }
  }
}

export const getWechat = () => {
  const wechatClient = new Wechat(wechatConfig.wechat)

  return wechatClient
}

export const getOAuth = () => {
  const oauth = new WechatOAuth(wechatConfig.wechat)

  return oauth
}
