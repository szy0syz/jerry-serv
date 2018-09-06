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

> 这么多todos，前中后都是我，坑的仍然是我。

* [ ] [FE] 使用Vuex重构前期件
* [ ] [FE] 重构qiniu-img-upload图片上传组件
* [ ] [BE] 修正Article-Controller业务逻辑-根据不同角色用户改变status
* [ ] [FE] 再次封装axios，对错误信息预先提示
* [x] [BE] ~~修复require.context不支持绝对路径问题~~
  * 根源：**传递给 require.context 的参数必须是字面量(literal)！**
* [x] [BE] ~~优化ArticleQuery查询结果，节省不必要资源缓存~~
* [x] [FE] ~~修复前端404不异常500报错~~
* [ ] [FE] index页注册快捷键操作
* [ ] [BE] 完善后端中各个控制器[required]修饰器的逻辑使用
* [ ] [FE] 使用Nuxt全家桶:axios-moudle/auth-module/apollo-module/pwa-apollo-module
* [ ] [FE] 实在没办法二次异步问题 A组件 B组件，A组件加载调用B组件，A组件mounted时加载异步数据后store设置state，B组件渲染需要这个state。难解？
* [ ] [FE] nuxtServiceInit使用异步dispatch问题
* [ ] [BE] redis缓存公共业务数据，不能让ODM每次都去查
* [ ] [BE] [🔥急]待优化fetchDetail时又自增又lean()问题
* [ ] [BE] 修复lean()方法不包含虚拟字段问题(拿中间件mongoose-lean-virtuals还是自己造轮子？)
* [ ] [BE] 重构后端Service层
  * [ ] [BE] 把现有Service层代码分两类重构：一类丢在Schema，另一类能复用的做成类似koa-rest形式
  * [ ] [BE] 针对特定Query，写mongoose中间件，每当create或update时更新Redis
* [ ] [BE] 缓存，缓存，缓存啊
  * [ ] [BE] 缓存首页数据，缓存文章的likeNum，延迟批量insertMany
  * [ ] [BE] 重构Service层，来个“pipeline”查询，先经过redis，再去MongoDB
* [ ] [BE]GraqhQL
* [ ] [BE] 鉴权：登录后放jwt，单独casbin模块，后续请求放header，在graqhql前执行鉴权
* [ ] [BE] 移除session，使用jwt代替
* [x] [BE] ~~重构后端路由：私密和受保护两部分~~

## Architecture

### 鉴权

* Api分割两个部分：
  * 公开部分：无须权限认证，但需用redis限流
  * 私密部分：除了register和logon以外，全部需要验证

## Test

* `curl -H "Content-Type:application/json" -X POST -d '{"_id": "5b790ae5275be80c380e7074", "username": "shi", "userid":"44"}' http://127.0.0.1:3000/api/articleHandler/like`
* `curl -H "Content-Type:application/json" -X POST -d '{"_id": "5b784114c861422a11899e9d", "username": "jerry_shi", "userid":"555", "avatar": "http://cdn.jerryshi.com/picgo/20180808232138.png", "content": "No.2 comment"}' http://127.0.0.1:3000/api/articleHandler/comment`
* `curl -H "Content-Type:application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTM2MTk3Njc5LCJleHAiOjE1MzYyMDQ4Nzl9.WGD4H7W57vGpE--4JlJDRU_B6OmRKn_M1nPx1slrhAg" -X POST -d '{"type": "现金", "customer": {"name": "jerry", "id": 666}, "creator":"5b7a66b214e2d51b090d162f", "content": [{"mid": "01011003", "mname": "敌敌畏", "mmodel": "100ml 拜耳", "qty": 2, "price": 90}]}' http://127.0.0.1:3000/api/public/saleorder`