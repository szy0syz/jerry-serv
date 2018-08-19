# 项目开发日志

## 更新

### 2018-08-12

* 🚀Feat    新增 `user-schema`: 使用bcrypt内置实例方法comparePassword和incLoginAttempts等
* ☀️Update  新增 mongoose-meta 插件
* ☀️Update  新增 koa-database 插件 & 系统配置加载
* ☀️Update  新增 article & artcileCategory schema

### 2018-08-11

* 🐛Fix     修复 `iview-admin` 中 `tinymce` 在ssr中兼容性问题
* 🚀Feat    新增 `vue-quill-editor` (ssr)
* 🔥Remove  删除 `tinymce` 代码 和 `screenshot`
* 🔨Refact  使用 `class` 重构server入口文件
* 🔨Refact  使用 `ramda` 和 `require.context` 重构server入口文件加载模式
* 🐛Fix     修复 全局样式 & 新增 `Koa-Static` 中间件

## TODO

* [ ] [FE]使用Vuex重构前期件
* [ ] [FE]重构qiniu-img-upload图片上传组件
* [ ] [BE]修正Article-Controller业务逻辑-根据不同角色用户改变status
* [ ] [FE]再次封装axios，对错误信息预先提示
* [ ] [BE]修复require.context不支持绝对路径问题
* [x] [BE]~~优化ArticleQuery查询结果，节省不必要资源缓存~~
* [ ] [FE]index页中tagsRouter优化
* [ ] [FE]index页注册快捷键操作
* [ ] [BE]完善后端中各个控制器[required]修饰器的逻辑使用