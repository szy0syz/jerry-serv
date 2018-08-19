// 微信异步场景的入口文件 管理微信api地址
import fs from 'fs'
// import path from 'path'
import * as _ from 'lodash'
import request from 'request-promise'
// import formstream from 'formstream'
import { sign } from './util'

const base = 'https://api.weixin.qq.com/cgi-bin/'
const api = {
  accessToken: base + 'token?grant_type=client_credential',
  temporary: {
    upload: base + 'media/upload?',
    fetch: base + 'media/get?'
  },
  permanent: {
    upload: base + 'material/add_material?',
    uploadNews: base + 'material/add_news?',
    uploadNewsPic: base + 'media/uploadimg?',
    fetch: base + 'material/get_material?',
    del: base + 'material/del_material?',
    update: base + 'aterial/update_news?',
    count: base + 'material/get_materialcount?',
    batch: base + 'material/batchget_material?'
  },
  tag: {
    create: base + 'tags/create?',
    fetch: base + 'tags/get?',
    update: base + 'tags/update?',
    del: base + 'tags/delete?',
    fetchUsers: base + 'user/tag/get?',
    batchTag: base + 'tags/members/batchtagging?',
    batchUnTag: base + 'tags/members/batchuntagging?',
    getTagList: base + 'tags/getidlist?'
  },
  user: {
    remark: base + 'user/info/updateremark?',
    info: base + 'user/info?',
    batchInfo: base + 'user/info/batchget?',
    fetchUserList: base + 'user/get?',
    getBlackList: base + 'tags/members/getblacklist?',
    batchBlackUsers: base + 'tags/members/batchblacklist?',
    batchUnBlackUsers: base + 'tags/members/batchunblacklist?'
  },
  menu: {
    create: base + 'menu/create?',
    get: base + 'menu/get?',
    del: base + 'menu/delete?',
    addConditional: base + 'menu/addconditional?',
    delConditional: base + 'menu/delconditional?',
    getInfo: base + 'get_current_selfmenu_info?'
  },
  ticket: {
    get: base + 'ticket/getticket?'
  },
  template: {
    setIndustry: base + 'template/api_set_industry?', // 设置所属行业
    getIndustry: base + 'template/get_industry?', // 获取设置的行业信息
    get: base + 'template/api_add_template?', // 获得模板ID ! "腾讯写错了?"
    getAll: base + 'get_all_private_template', // 获取模板列表
    del: base + 'del_private_template?', // 删除模板
    send: base + 'message/template/send?' // 发送模板消息
  },
  customservice: {
    getList: base + 'customservice/getkflist', // 获取客服基本信息
    getOnLineList: base + 'customservice/getonlinekflist?', // 获取在线客服基本信息
    add: 'https://api.weixin.qq.com/customservice/kfaccount/add?', // 添加客服帐号 腾讯也醉了?
    invite: 'https://api.weixin.qq.com/customservice/kfaccount/inviteworker?', // 邀请绑定客服帐号
    update: 'https://api.weixin.qq.com/customservice/kfaccount/update?', // 设置客服信息
    uploadheadimg: 'https://api.weixin.qq.com/customservice/kfaccount/uploadheadimg?', // 上传客服头像
    del: 'https://api.weixin.qq.com/customservice/kfaccount/del?' // 删除客服帐号
  }
}

// 后面再用
// function statFile (filepath) {
//   return new Promise((resolve, reject) => {
//     fs.stat(filepath, (err, stat) => {
//       if (err) reject(err)
//       else resolve(stat)
//     })
//   })
// }

export default class Wechat {
  constructor(opts) {
    this.opts = Object.assign({}, opts)
    this.appID = opts.appID
    this.appSecret = opts.appSecret
    this.getAccessToken = opts.getAccessToken
    this.saveAccessToken = opts.saveAccessToken

    this.getTicket = opts.getTicket
    this.saveTicket = opts.saveTicket

    // 初始实例时，获取accessToken和ticket
    this.fetchAccessToken()
    this.fetchTicket() // 构造函数不能用异步await
  }

  async request(options) {
    options = Object.assign({}, options, { json: true })
    console.log('requset请求的options： \n', options)
    try {
      const response = await request(options)
      console.log('wechat-lib/index.js中request函数的response: \n', response)
      return response
    } catch (err) {
      console.error(err)
    }
  }

  // 初始获取token
  async fetchAccessToken() {
    let data = await this.getAccessToken()

    // token不合法就更新token
    if (!this.isValidToken(data, 'access_token')) {
      data = await this.updateAccessToken()
    }

    await this.saveAccessToken(data)

    return data
  }

  async fetchTicket(token) {
    let data = await this.getTicket()

    // ticket失效或不合法就更新
    if (!this.isValidToken(data, 'ticket')) {
      // 如果没传token参数，尝试到数据库获取
      if (!token) {
        const dbToken = await this.getAccessToken()
        token = dbToken.token
      }
      data = await this.updateTicket(token)
    }

    await this.saveTicket(data)

    return data
  }

  async updateTicket(token) {
    const url = api.ticket.get + 'access_token=' + token + '&type=jsapi'

    let data = await this.request({ url })
    const now = new Date().getTime()
    const expiresIn = now + (data.expires_in - 20) * 1000
    data.expires_in = expiresIn

    return data
  }

  // 首次初始化时数据库没有就用此函数向微信服务器发送请求获取最新token
  async updateAccessToken() {
    const url =
      api.accessToken + '&appid=' + this.appID + '&secret=' + this.appSecret
    const data = await this.request({ url })
    const now = new Date().getTime()
    const expiresIn = now + (data.expires_in - 20) * 1000

    data.expires_in = expiresIn

    return data
  }

  isValidToken(data, name) {
    if (!data || !data[name] || !data.expires_in) {
      return false
    }

    const expiresIn = data.expires_in
    const now = new Date().getTime()

    if (now < expiresIn) {
      return true
    } else {
      return false
    }
  }

  async handle(operation, ...args) {
    const tokenData = await this.fetchAccessToken()
    const options = this[operation](tokenData.access_token, ...args)
    const data = await this.request(options)

    return data
  }

  uploadMaterial(token, type, material, permanent) {
    let form = {}
    let url = api.temporary.upload // 临时素材地址

    // 如果是永久素材
    if (permanent) {
      url = api.temporary.upload
      // 把永久素材的属性继承到form表单中
      _.extend(form, permanent)
    }

    if (type === 'pic') {
      url = api.permanent.uploadNewsPic
    }
    // 如果是图文素材
    if (type === 'news') {
      url = api.permanent.uploadNews
      form = material
    } else {
      // from = formsteam()
      form.media = fs.createReadStream(material)
      // const stat = await statFile(material)
      // form.file('media', material, path.basename(material), stat.size)
    }

    // 拼接上传url
    let uploadUrl = url + 'access_token=' + token

    if (!permanent) {
      uploadUrl += '&type=' + type
    } else {
      if (type !== 'news') {
        form.access_token = token
      }
      // form.field('access_token', access_token)
    }

    const options = {
      method: 'POST',
      url: uploadUrl,
      json: true
    }

    if (type === 'news') {
      options.body = form
    } else {
      options.formData = form
    }

    return options
  }

  fetchMaterial(token, mediaId, type, permanent) {
    let form = {}
    let fetchUrl = api.temporary.fetch

    if (permanent) {
      fetchUrl = api.permanent.fetch
    }

    let url = fetchUrl + 'access_token=' + token
    let options = { method: 'POST', url: url }

    if (permanent) {
      form.media_id = mediaId
      form.access_token = token
      options.body = form
    } else {
      if (type === 'video') {
        url = url.replace('https://', 'http://')
      }

      url += 'media_id=' + mediaId
    }

    return options
  }

  deleteMaterial(token, mediaId) {
    const form = {
      media_id: mediaId
    }

    const url =
      api.permanent.del + 'access_token=' + token + '&media_id=' + mediaId

    return { method: 'POST', url: url, body: form }
  }

  updateMaterial(token, mediaId, news) {
    const form = {
      media_id: mediaId
    }

    _.extend(form, news)
    const url =
      api.permanent.update + 'access_token=' + token + '&media_id=' + mediaId

    return { method: 'POST', url: url, body: form }
  }

  countMaterial(token) {
    const url = api.permanent.count + 'access_token=' + token

    return { method: 'POST', url: url }
  }

  batchMaterial(token, options) {
    options.type = options.type || 'image'
    options.offset = options.offset || 0
    options.count = options.count || 10

    const url = api.permanent.batch + 'access_token=' + token

    return { method: 'POST', url: url, body: options }
  }

  createTag(token, name) {
    const body = {
      tag: {
        name
      }
    }
    const url = api.tag.create + 'access_token=' + token
    // 返回的都是request的options
    return { method: 'POST', url, body }
  }

  // 获取标签列表
  fetchTags(token) {
    const url = api.tag.fetch + 'access_token=' + token

    return { url }
  }

  updateTag(token, tagId, name) {
    const body = {
      tag: {
        id: tagId,
        name
      }
    }

    const url = api.tag.update + 'access_token=' + token

    return { method: 'POST', url, body }
  }

  delTag(token, tagId) {
    const body = {
      tag: {
        id: tagId
      }
    }

    const url = api.tag.del + 'access_token=' + token

    return { method: 'POST', url, body }
  }

  // 获取某个标签下的粉丝列表
  fetchTagUsers(token, tagId, openId) {
    const body = {
      tagid: tagId,
      next_openid: openId || ''
    }

    const url = api.tag.fetchUsers + 'access_token=' + token

    return { method: 'POST', url, body }
  }

  // 批量为用户打标签或取消标签
  batchTag(token, openIdList, tagId, unTag) {
    const body = {
      openid_list: openIdList,
      tagid: tagId
    }
    const url = unTag
      ? api.tag.batchUnTag
      : api.tag.batchTag + 'access_token=' + token

    return { method: 'POST', url, body }
  }

  // 获取用户身上的标签列表
  getTagList(token, openId) {
    const body = { openid: openId }
    const url = api.tag.getTagList + 'access_token=' + token

    return { method: 'POST', url, body }
  }

  // 设置用户备注名
  remarkUser(token, openId, remark) {
    const body = {
      openid: openId,
      remark: remark
    }
    const url = api.user.remark + 'access_token=' + token

    return { method: 'POST', url, body }
  }

  getUserInfo(token, openId, lang) {
    const url = `${
      api.user.info
    }access_token=${token}&openid=${openId}&lang=${lang || 'zh_CN'}`
    return { url }
  }

  batchUserInfo(token, userList) {
    const url = api.user.batchInfo + 'access_token=' + token
    const body = { user_list: userList }
    return { method: 'POST', url, body }
  }

  // 批量获取用户列表
  fetchUserList(token, nextOpenId) {
    const url = `${
      api.user.fetchUserList
    }access_token=${token}&next_openid=${nextOpenId || ''}`
    return { url }
  }

  createMenu(token, menu) {
    const url = api.menu.create + 'access_token=' + token
    return { method: 'POST', url, body: menu }
  }

  getMenu(token) {
    const url = api.menu.get + 'access_token=' + token
    return { url } // default method -> get
  }

  delMenu(token) {
    const url = api.menu.del + 'access_token=' + token
    return { url }
  }

  addConditionalMenu(token, menu, rule) {
    const url = api.menu.addConditional + 'access_tokem=' + token
    const body = {
      button: menu,
      matchrule: rule
    }
    return { method: 'POST', url, body }
  }

  delConditionalMenu(token, menuId) {
    const url = api.menu.delConditional + 'access_token=' + token
    const body = {
      menuid: menuId
    }
    return { method: 'POST', url, body }
  }

  getCurrentMenuInfo(token) {
    const url = api.menu.getInfo + 'access_token=' + token
    return { url }
  }

  sign(ticket, url) {
    return sign(ticket, url)
  }

  sendTemplate(token, body) {
    const url = api.template.send + 'access_token=' + token

    return { method: 'POST', url, body }
  }
}
