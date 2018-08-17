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
                        <qiniuImgUpload @handleSuccess = "(url) => this.article.cover = url"></qiniuImgUpload>
                    </FormItem>
                    <!-- <div class="article-link-con">
                        <transition name="fixed-link">
                            <FormItem v-show="showLink" label="固定链接">
                                <span>
                                    <span key="pathfixedtext">{{ fixedLink }}</span>
                                    <span key="pathText" v-if="!editLink">{{ articlePath }}</span>
                                    <Input key="pathInput" v-model="articlePath" style="display:inline-block;width:auto" v-else/>
                                </span>
                                <span style="float:right;">
                                    <Button :type="editPathButtonType" @click="editArticlePath">{{ editPathButtonText }}</Button>
                                </span>
                            </FormItem>
                        </transition>
                    </div> -->
                </Form>
                <div class="margin-top-20">
                  <input type="file" style="display:none" id="file" ref="input" @change="handleUploadImg">
                  <div class="quill-editor" 
                    v-model="article.content"
                    v-quill:myQuillEditor="editorOption">
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
            <div class="margin-top-10">
                <Card>
                    <p slot="title">
                        <Icon type="navicon-round"></Icon>
                        分类目录
                    </p>
                    <Tabs type="card">
                        <!-- <TabPane label="所有分类目录">
                            <div class="classification-con">
                                <Tree :data="classificationList" @on-check-change="setClassificationInAll" show-checkbox></Tree>
                            </div>
                        </TabPane> -->
                        <TabPane label="所有分类目录">
                            <div class="classification-con">
                                <RadioGroup v-model="article.type" vertical>
                                    <Radio v-for="item in articleTypeList" :key="item._id" :label="item._id">
                                        <span>{{item.name}}</span>
                                    </Radio>
                                </RadioGroup>
                            </div>
                        </TabPane>
                    </Tabs>
                </Card>
            </div>
            <div class="margin-top-10">
                <Card>
                    <p slot="title">
                        <Icon type="ios-pricetags-outline"></Icon>
                        标签
                    </p>
                    <Row>
                        <Col span="18">
                        <Select v-model="article.tags" multiple @on-change="handleSelectTag" placeholder="请选择文章标签">
                            <Option v-for="item in articleTagList" :value="item._id" :key="item.name">{{ item.name }}</Option>
                        </Select>
                        </Col>
                        <Col span="6" class="padding-left-10">
                        <Button v-show="!addingNewTag" @click="handleAddNewTag" long type="ghost">新建</Button>
                        </Col>
                    </Row>
                    <transition name="add-new-tag">
                        <div v-show="addingNewTag" class="add-new-tag-con">
                            <Col span="14">
                            <Input v-model="newTagName" placeholder="请输入标签名" />
                            </Col>
                            <Col span="5" class="padding-left-10">
                            <Button @click="createNewTag" long type="primary">确定</Button>
                            </Col>
                            <Col span="5" class="padding-left-10">
                            <Button @click="cancelCreateNewTag" long type="ghost">取消</Button>
                            </Col>
                        </div>
                    </transition>
                </Card>
            </div>
            </Col>
        </Row>
    </div>
</template>

<script>
import axios from '~/plugins/axios2'
import * as qiniu from 'qiniu-js'
import randomToken from 'random-token'
import config from '../../server/config'

import qiniuImgUpload from '../../components/qiniu/qiniu-img-upload'

export default {
  name: 'artical-managerment',
  data() {},
  methods: {},
  computed: {},
  components: {},
  mounted() {},
  destroyed() {}
}
</script>
