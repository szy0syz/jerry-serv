# jerry-serv

    PC端、api接口、GraphQL的后端综合管理平台

## Tech Stack

* `NodeJS`
* `Vue`
* `Server-side Rendered`
* `MongoDB`
* `JSWON Web Tokens`
* `Webpack`
* `LESS`
* `Apollo Client`
* `GraphQL`
* `Ramda`

## Top Features

* 使用ES7-decorator重构koa-router合并路由与控制器
* Bcrypt password encryption/verification
* quill-editor powerful rich text editor
* 二次封装iview与quill-editor图片上传组件
* csabin颗粒度精细的权限管理
* ramda函数式编程实现自加载路由等
* backpack 简约NodeJS后端构建工具
* ECharts数据可视化
* Puppeteer无头浏览器爬虫专用

## 安装

```bash
npm install
```

## 环境

> ✔️ 开发环境：macOS, Version 10.12.6 + Chrome v68 + NodeJS v10.9.0

> ✔️ 开发环境：Windows 10 Enterprise LTSB + Chrome v68 + NodeJS v10.9.0

```bash
# for development
npm run dev

# from test
npm run publish:test

# for production
npm run publish:prod
```

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
* [ ] [BE] 修复jwt-token过期时的逻辑(重发还是重登)

## Architecture

### 鉴权

* Api分割两个部分：
  * 公开部分：无须权限认证，但需用redis限流
  * 私密部分：除了register和login外，全部需要验证
