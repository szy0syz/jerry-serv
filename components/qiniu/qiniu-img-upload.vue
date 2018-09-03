// 文件componets/qiniu-upload.vue
<template>
<div>
  <div class="demo-upload-list" v-for="(item,index) in uploadList" :key="index">
        <template v-if="item.status === 'finished'">
            <img :src="item.url">
            <div class="demo-upload-list-cover">
                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
            </div>
        </template>
        <template v-else>
            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
        </template>
    </div>
    <Upload   
        ref="upload"
        :show-upload-list="false"
        :default-file-list="defaultList"
        :on-success="handleSuccess"
        :format="['jpg','jpeg','png']"
        :max-size="maxSize"
        :on-format-error="handleFormatError"
        :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload"
        :multiple="!multiple"
        type="drag"
        :data="uptoken"
        :action="actionUrl"
        :style="{'display': 'inline-block','width':width}">
        <div :style="{'width': width,'height':height,'line-height': '58px'}" v-if="multiple&&uploadList.length==0">
            <Icon type="camera" size="20"></Icon>
        </div>
    </Upload>
    <Modal title="图片预览" v-model="visible">
        <img :src="picHostName + imgName" v-if="visible" style="width: 100%">
    </Modal>
</div>
</template>
<script>
import config from '../../server/config' //七牛配置
import axios from '~/plugins/axios2'

export default {
  name: 'qiniu-img-upload',
  props: {
    maxSize: {
      type: Number,
      default: 2048
    },
    multiple: {
      type: Boolean,
      default: true
    },
    width: {
      default: '58px'
    },
    height: {
      default: '58px'
    }
  },
  data() {
    return {
      defaultList: [],
      imgName: '',
      picHostName: 'http://cdn.jerryshi.com/',
      visible: false,
      uploadList: [],
      uptoken: {},
      actionUrl: 'https://upload.qiniup.com',   // 华东
      fileList: []
    }
  },
  computed: {
    // uploadList1() {
    //   return [this.$store.state.article.curtArticle.cover] || []
    // }
  },
  methods: {
    async getToken() {
      let token = await axios.get('/api/qiniu/token')
      token = token.data.data.token
      this.uptoken.token = token
    },
    handleView(name) {
      this.imgName = name
      this.visible = true
    },
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
    },
    handleSuccess(res, file) {
      // console.log(res);
      file.url = 'http://cdn.jerryshi.com/' + res.key
      file.name = res.key
      // console.log('this.$refs.upload.fileList',this.$refs.upload.fileList)
      // console.log('this.$store.state.article.curtArticle.cover',this.$store.state.article.curtArticle.cover)
      this.$emit('handleSuccess', 'http://cdn.jerryshi.com/' + res.key) //传递给父组件
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: '上传的格式不正确',
        desc: "文件'" + file.name + "'不合法, 请重新选择jpg or png.的格式"
      })
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: '文件大小超出限制',
        desc: "文件'" + file.name + "'大小超出" + this.maxSize / 1024 + 'M限制'
      })
    },
    handleBeforeUpload() {
      const check = this.uploadList.length < 1
      if (!check) {
        this.$Notice.warning({
          title: '最多只能上传1张图片'
        })
      }
      return check
    }
  },
  mounted() {
    // this.getToken()
    this.uploadList = this.$refs.upload.fileList
    // TODO: 重写七牛上传封面图上传组件
    
    // TODO: 是在没办法二次异步问题 A组件 B组件，A组件加载调用B组件，A组件mounted时加载异步数据后store设置state，B组件渲染需要这个state。难解？
    setTimeout(() => {
      const cover = this.$store.state.article.curtArticle.cover
      if (cover) {
      this.uploadList.push({url: this.$store.state.article.curtArticle.cover, status: 'finished'})
    }
    }, 900)
  }
}
</script>
<style>
.demo-upload-list {
  display: inline-block;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin-right: 4px;
}
.demo-upload-list img {
  width: 100%;
  height: 100%;
}
.demo-upload-list-cover {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.demo-upload-list:hover .demo-upload-list-cover {
  display: block;
}
.demo-upload-list-cover i {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  margin: 0 2px;
}
</style>
