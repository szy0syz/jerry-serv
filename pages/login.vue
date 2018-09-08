<template>
  <div id="main">
    <div class="login">
      <div class="login-form">
        <div class="login-logo">
          <span>欢迎</span>
        </div>
        <Form inline ref="loginFormRef" :model="formData" :rules="rule">
          <FormItem prop="user" class="form-item">
            <Input type="text" icon="person" v-model="formData.user" @on-enter="loginSubmit" placeholder="登录账号"/>
          </FormItem>
          <FormItem prop="password" class="form-item">
            <Input type="password" icon="ios-locked" v-model="formData.password" @on-enter="loginSubmit" placeholder="账户密码"/>
          </FormItem>
          <FormItem class="form-item" style="margin-bottom:5px;">
            <!-- <Checkbox v-model="record">记住登录</Checkbox> -->
            <!-- <a style="float:right;">忘记密码</a> -->
          </FormItem>
          <FormItem class="form-item">
            <Button class="loginBtn" type="primary" :loading="loading" @click="loginSubmit">
              登 录
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
import md5 from '~/libs/md5'
import Cookies from 'js-cookie'
import qiniuService from '../services/qiniu.js'

export default {
  layout: 'full',
  asyncData({ query }) {
    let jump = query.jump || ''
    return {
      jump: jump,
      record: false,
      loading: false,
      formData: {
        user: '',
        password: ''
      },
      rule: {
        user: [
          { required: true, message: '请填写登录账户', trigger: 'blur' },
          {
            type: 'string',
            min: 2,
            message: '登录账户最少为2个字符',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请填写账户密码', trigger: 'blur' },
          {
            type: 'string',
            min: 6,
            max: 30,
            message: '账户密码必须为6~30字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    loginSubmit() {
      this.loading = true
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) {
          this.loading = false
          this.$Message.error({
            content: '请正确填写登录账户和密码！',
            duration: 2,
            closable: true
          })
        } else {
          let _usr = this.formData.user
          // let _psd = md5(this.formData.password)
          let _psd = this.formData.password // TODO: 后期密码策略优化
          // let req = await axios.post('/api/admin/login', {
          //   username: _usr,
          //   password: _psd
          // })
          let req = await this.$axios.$post('/api/admin/login', {
            username: _usr,
            password: _psd
          })

          // console.log('~~~req~~~\n', req)

          if (!!req.data && req.data.code !== 0) {
            let msg = req.data.message || '登录失败'
            this.$Message.error({ content: msg, duration: 2, closable: true })
            this.loading = false
            return false
          }

          const TOKEN = req.data.token
          console.log('TOKEN', TOKEN)
          console.log('info', req.data.info)
          // 三重保护确保token能正确使用
          this.$store.commit('SET_TOKEN', TOKEN)
          localStorage.setItem('TOKEN', TOKEN)
          Cookies.set('TOKEN', TOKEN, { path: '/login' })

          this.$axios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${TOKEN}`

          this.$store.commit('SET_USERINFO', req.data.info)
          this.$store.commit(
            'setAvator',
            'http://cdn.jerryshi.com/picgo/20180819213615.png'
          )
          this.$Message.success('恭喜您，登录成功！')
          let route = { path: '/' }
          if (this.jump !== '' && typeof this.jump !== 'undefined') {
            route.path = this.jump
          }
          setTimeout(() => {
            this.loading = false
            this.$router.push(route)
          }, 50)
        }
      })
    }
  },
  async mounted() {}
}
</script>
<style scoped>
#main {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: #f8f8f9;
}

.login {
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  background: #f8f8f9;
}

.login-form {
  width: 350px;
  height: 340px;
  padding: 35px;
  -webkit-box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.08);
  background: #fff;
}

.login-logo {
  text-align: center;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  margin-bottom: 20px;
}

.login-logo > span {
  vertical-align: text-bottom;
  font-size: 16px;
  text-transform: uppercase;
  display: inline-block;
  color: rgba(0, 0, 0, 0.65);
}

.form-item {
  width: 100%;
}

.item-input > i.ivu-input-icon {
  left: 0;
  right: auto;
}

.loginBtn {
  width: 100%;
}
</style>
