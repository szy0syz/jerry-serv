<style lang="less">
@import '../../assets/css/common.less';
.article-link-con {
  height: 32px;
  width: 100%;
}
.fixed-link-enter {
  opacity: 0;
}
.fixed-link-enter-active,
.fixed-link-leave-active {
  transition: opacity 0.3s;
}
.fixed-link-enter-to {
  opacity: 1;
}
.openness-radio-con {
  margin-left: 40px;
  padding-left: 10px;
  height: 130px;
  border-left: 1px dashed #ebe9f3;
  overflow: hidden;
}
.publish-time-picker-con {
  margin-left: 40px;
  padding-left: 10px;
  height: 100px;
  border-left: 1px dashed #ebe9f3;
  overflow: hidden;
}
.openness-con-enter {
  height: 0;
}
.openness-con-enter-active,
.openness-con-leave-active {
  transition: height 0.3s;
}
.openness-con-enter-to {
  height: 130px;
}
.openness-con-leave {
  height: 130px;
}
.openness-con-leave-to {
  height: 0;
}
.publish-button-con {
  border-top: 1px solid #f3eff1;
  padding-top: 14px;
}
.publish-button {
  float: right;
  margin-left: 10px;
}
.publish-time-enter {
  height: 0;
}
.publish-time-enter-active,
.publish-time-leave-active {
  transition: height 0.3s;
}
.publish-time-enter-to {
  height: 100px;
}
.publish-time-leave {
  height: 100px;
}
.publish-time-leave-to {
  height: 0;
}
.classification-con {
  height: 200px;
  margin-top: -16px;
  border-left: 1px solid #dddee1;
  border-right: 1px solid #dddee1;
  border-bottom: 1px solid #dddee1;
  border-radius: 0 0 3px 3px;
  padding: 10px;
  overflow: auto;
}
.add-new-tag-con {
  margin-top: 20px;
  border-top: 1px dashed #dbdddf;
  padding: 20px 0;
  height: 60px;
  overflow: hidden;
}
.add-new-tag-enter {
  height: 0;
  margin-top: 0;
  padding: 0px 0;
}
.add-new-tag-enter-active,
.add-new-tag-leave-active {
  transition: all 0.3s;
}
.add-new-tag-enter-to {
  height: 60px;
  margin-top: 20px;
  padding: 20px 0;
}
.add-new-tag-leave {
  height: 60px;
  margin-top: 20px;
  padding: 20px 0;
}
.add-new-tag-leave-to {
  height: 0;
  margin-top: 0;
  padding: 0px 0;
}

////////////////////////
.quill-editor {
  min-height: 400px;
  max-height: 500px;
  overflow-y: auto;
}
</style>

<template>
  <div>
    <Row>
      <Col span="18">
      <Card>
        <Form :label-width="80">
          <FormItem label="文章标题">
            <Input v-model="article.title" @on-blur="handleArticletitleBlur" placeholder="请输入标题..." icon="android-list" />
          </FormItem>
          <FormItem label="文章摘要">
            <Input v-model="article.desc" type="textarea" :autosize="{minRows: 2,maxRows: 3}" placeholder="请输入摘要..." icon="android-list" />
          </FormItem>
          <FormItem label="文章封面">
            <qiniuImgUpload ref="qiniuUploader" @handleSuccess="(url) => this.article.cover = url"></qiniuImgUpload>
          </FormItem>
        </Form>
        <div class="margin-top-20">
          <input type="file" style="display:none" id="file" ref="input" @change="handleUploadImg">
          <div class="quill-editor" v-model="article.content" v-quill:myQuillEditor="editorOption">
          </div>
        </div>
      </Card>
      </Col>
      <Col span="6" class="padding-left-10">
      <Card>
        <p slot="title">
          <Icon type="paper-airplane"></Icon>
          发布
        </p>
        <p class="margin-top-10">
          <Icon type="android-time"></Icon>&nbsp;&nbsp;状&nbsp;&nbsp;&nbsp;态：
          <Select size="small" style="width:90px" :value="article.status">
            <Option v-for="item in articleStateList" :value="item.value" :key="item.value">{{ item.name }}</Option>
          </Select>
        </p>
        <p class="margin-top-10">
          <Icon type="eye"></Icon>&nbsp;&nbsp;公开度：&nbsp;
          <b>{{ Openness }}</b>
          <Button v-show="!editOpenness" size="small" @click="handleEditOpenness" type="text">修改</Button>
          <transition name="openness-con">
            <div v-show="editOpenness" class="openness-radio-con">
              <RadioGroup v-model="article.openness" vertical>
                <Radio label="public">
                  公开
                  <Checkbox v-show="article.openness === 'public'" v-model="article.isTop">在首页置顶这篇文章</Checkbox>
                </Radio>
                <Radio label="protected">
                  密码
                  <Input v-show="article.openness === 'protected'" v-model="article.password" style="width:120px" size="small" placeholder="请输入密码" />
                </Radio>
                <Radio label="private">私密</Radio>
              </RadioGroup>
              <div>
                <Button type="primary" @click="handleSaveOpenness">确认</Button>
                <Button type="ghost" @click="cancelEditOpenness">取消</Button>
              </div>
            </div>
          </transition>
        </p>
        <p class="margin-top-10">
          <Icon type="ios-calendar-outline"></Icon>&nbsp;
          <span v-if="publishTimeType === 'immediately'">立即发布:</span>
          <span v-else>定时：{{ publishTime }}</span>
          <Button v-show="!editPublishTime" size="small" @click="handleEditPublishTime" type="text">修改</Button>
          <transition name="publish-time">
            <div v-show="editPublishTime" class="publish-time-picker-con">
              <div class="margin-top-10">
                <DatePicker @on-change="setPublishTime" type="datetime" style="width:200px;" placeholder="选择日期和时间"></DatePicker>
              </div>
              <div class="margin-top-10">
                <Button type="primary" @click="handleSavePublishTime">确认</Button>
                <Button type="ghost" @click="cancelEditPublishTime">取消</Button>
              </div>
            </div>
          </transition>
        </p>
        <Row class="margin-top-20 publish-button-con">
          <span class="publish-button">
            <Button @click="handlePreview">预览</Button>
          </span>
          <span class="publish-button">
            <Button @click="handleSaveDraft">保存草稿</Button>
          </span>
          <span class="publish-button">
            <Button @click="handlePublish" :loading="publishLoading" icon="ios-checkmark" style="width:90px;" type="primary">发布</Button>
          </span>
        </Row>
      </Card>

      </Col>
    </Row>
  </div>
</template>

<script>
import * as qiniu from 'qiniu-js'
import randomToken from 'random-token'
import config from '../../server/config'

import qiniuImgUpload from '../../components/qiniu/qiniu-img-upload'

export default {
  name: 'topic-add',
  data() {
    const self = this
    return {
      content: '',
      article: {
        title: '',
        cover: '',
        desc: '',
        content: '',
        status: 1,
        openness: 'public',
        password: '',
        author: ''
      },
      articleTypeList: [],
      editorOption: {
        modules: {
          toolbar: {
            container: [
              ['bold', 'italic', 'underline', 'strike'],
              ['blockquote', 'code-block'],
              [{ header: 1 }, { header: 2 }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }],
              [{ indent: '-1' }, { indent: '+1' }],
              [{ direction: 'rtl' }],
              [{ size: ['small', false, 'large', 'huge'] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ font: [] }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              ['clean'],
              ['link', 'image', 'video']
            ],
            handlers: {
              image: function () {
                this.quill.format('image', false) // 禁用quill内部上传图片方法
                // console.log(this)
                self.handleClickImg(this)
              }
            }
          },
          syntax: {
            highlight: text => hljs.highlightAuto(text).value
          },
          imageDrop: true
        }
      },
      articleTitle: '',
      showLink: false,
      fixedLink: '',
      articlePath: '',
      articlePathHasEdited: false,
      editLink: false,
      editPathButtonType: 'ghost',
      editPathButtonText: '编辑',
      articleStateList: [],
      editOpenness: false,
      Openness: '公开',
      OpennessObj: {},
      currentOpenness: '公开',
      topArticle: false,
      publishTime: '',
      publishTimeType: 'immediately',
      editPublishTime: false, // 是否正在编辑发布时间
      articleTagSelected: [], // 文章选中的标签
      articleTagList: [], // 所有标签列表
      classificationList: [],
      classificationSelected: [], // 在所有分类目录中选中的目录数组
      offenUsedClass: [],
      offenUsedClassSelected: [], // 常用目录选中的目录
      classificationFinalSelected: [], // 最后实际选择的目录
      publishLoading: false,
      addingNewTag: false, // 添加新标签
      newTagName: '' // 新建标签名
    }
  },
  methods: {
    handleClickImg(handle) {
      this.quill = handle.quill
      let inputfile = document.getElementById('file')
      inputfile.click()
    },
    async handleUploadImg() {
      let files = document.getElementById('file')
      let file = files.files[0]
      let key = randomToken(32)
      // key = `yncyzj/${key}.${file.name.split('.')[1]}`
      key = `yncyzj/${key}`
      // let token = this.$store.getters.getQiniuToken
      let token = this.$store.state.app.qiniuToken

      const self = this
      const myConfig = config
      const observer = {
        next(res) {
          console.log(res.total, res)
        },
        error(err) {
          console.error(err)
        },
        complete(res) {
          let length = self.quill.getSelection().index
          // TODO: Can not access config / myConfig ?!!
          const imgUrl = 'http://cdn.jerryshi.com/' + res.key
          self.quill.insertEmbed(length, 'image', imgUrl)
        }
      }

      const observable = qiniu.upload(
        file,
        key,
        token,
        null,
        config.qiniu.config
      )
      observable.subscribe(observer) // 上传开始
    },
    handleArticletitleBlur() {
      if (this.article.title.length !== 0) {
        localStorage.articleTitle = this.article.title // 本地存储文章标题
        if (!this.articlePathHasEdited) {
          let date = new Date()
          let year = date.getFullYear()
          let month = date.getMonth() + 1
          let day = date.getDate()
          this.fixedLink =
            window.location.host + '/' + year + '/' + month + '/' + day + '/'
          this.articlePath = this.article.title
          this.articlePathHasEdited = true
          this.showLink = true
        }
      } else {
        this.$Message.error('文章标题不可为空哦')
      }
    },
    editArticlePath() {
      this.editLink = !this.editLink
      this.editPathButtonType =
        this.editPathButtonType === 'ghost' ? 'success' : 'ghost'
      this.editPathButtonText =
        this.editPathButtonText === '编辑' ? '完成' : '编辑'
    },
    handleEditOpenness() {
      this.editOpenness = !this.editOpenness
    },
    handleSaveOpenness() {
      this.Openness = this.OpennessObj[this.article.openness]
      this.editOpenness = false
    },
    cancelEditOpenness() {
      this.currentOpenness = this.Openness
      this.editOpenness = false
    },
    handleEditPublishTime() {
      this.editPublishTime = !this.editPublishTime
    },
    handleSavePublishTime() {
      this.publishTimeType = 'timing'
      this.editPublishTime = false
    },
    cancelEditPublishTime() {
      this.publishTimeType = 'immediately'
      this.editPublishTime = false
    },
    setPublishTime(datetime) {
      this.publishTime = datetime
    },
    setClassificationInAll(selectedArray) {
      this.classificationFinalSelected = selectedArray.map(item => {
        return item.title
      })
      localStorage.classificationSelected = JSON.stringify(
        this.classificationFinalSelected
      ) // 本地存储所选目录列表
    },
    setClassificationInOffen(selectedArray) {
      this.classificationFinalSelected = selectedArray
    },
    handleAddNewTag() {
      this.addingNewTag = !this.addingNewTag
    },
    async createNewTag() {
      if (this.newTagName.length !== 0) {
        let res = await this.$axios.$post('/api/articleTag', { name: this.newTagName })
        if (res.success === true) {
          this.articleTagList.push({
            name: this.newTagName,
            _id: res.data._id
          })
          this.addingNewTag = false
          setTimeout(() => {
            this.newTagName = ''
          }, 200)
        } else {
          this.$Message.error('添加标签失败')
        }
      } else {
        this.$Message.error('请输入标签名')
      }
    },
    cancelCreateNewTag() {
      this.newTagName = ''
      this.addingNewTag = false
    },
    canPublish() {
      if (this.article.title.length === 0) {
        this.$Message.error('请输入文章标题')
        return false
      } else {
        return true
      }
    },
    handlePreview() {
      if (this.canPublish()) {
        console.log(this.$store.state.app.qiniuToken)
        console.log('@!!!!!!!!!!!!!')
        this.$Message.error('预览失败，请稍后再试。')
        // if (this.publishTimeType === 'immediately') {
        //   let date = new Date()
        //   let year = date.getFullYear()
        //   let month = date.getMonth() + 1
        //   let day = date.getDate()
        //   let hour = date.getHours()
        //   let minute = date.getMinutes()
        //   let second = date.getSeconds()
        //   localStorage.publishTime =
        //     year +
        //     ' 年 ' +
        //     month +
        //     ' 月 ' +
        //     day +
        //     ' 日 -- ' +
        //     hour +
        //     ' : ' +
        //     minute +
        //     ' : ' +
        //     second
        // } else {
        //   localStorage.publishTime = this.publishTime // 本地存储发布时间
        // }
        // localStorage.content = tinymcetinymce.activeEditor.getContent()
        // this.$router.push({
        //   name: 'preview'
        // })
      }
    },
    handleSaveDraft() {
      if (this.canPublish()) {
        this.$Message.error('保存草稿失败，请稍后再试。')
      }
    },
    async handlePublish() {
      if (this.canPublish()) {
        // this.publishLoading = true
        // console.log(this.article)
        this.article.author = this.$store.getters.getUserId

        let res = await this.$axios.$post('/api/article', this.article)

        if (res.success) {
          this.$Notice.success({
            title: '发布成功',
            desc: `《${res.data.title}》`
          })
          this.$router.push({
            name: 'article-list'
          })
        } else {
          this.$Notice.success({
            title: '发布失败',
            desc: `${res.data.error}`
          })
        }

        // setTimeout(() => {
        //   this.publishLoading = false
        //   this.$Notice.success({
        //     title: '保存成功',
        //     desc: '文章《' + this.article.title + '》保存成功'
        //   })
        // }, 1000)
      }
    },
    handleSelectTag() {
      // TODO: 本地化缓存文章tag
      // localStorage.tagsList = JSON.stringify(this.articleTagSelected) // 本地存储文章标签列表
    }
  },
  computed: {
    completeUrl() {
      let finalUrl = this.fixedLink + this.articlePath
      localStorage.finalUrl = finalUrl // 本地存储完整文章路径
      return finalUrl
    }
  },
  components: {
    qiniuImgUpload
  },
  async mounted() {
    // -------init ArticleTag--------
    let tagRes = await this.$axios.$get('/api/articleTag?size=99')
    this.articleTagList = tagRes.data
    // --------↑↑↑↑↑↑↑↑↑↑↑↑↑---------

    // -------init ArticleType--------
    let typeRes = await this.$axios.$get('/api/articleType?size=99')
    this.articleTypeList = typeRes.data
    // --------↑↑↑↑↑↑↑↑↑↑↑↑↑---------

    this.articleStateList = [
      {
        name: '保存',
        value: 0
      },
      {
        name: '提交',
        value: 1
      }
    ]

    this.OpennessObj = {
      public: '公开',
      protected: '密码',
      private: '私密'
    }

    // TODO: 清除上传控件的封面图
    this.$store.state.article.curtArticle.cover = ''
  },
  destroyed() {}
}
</script>

