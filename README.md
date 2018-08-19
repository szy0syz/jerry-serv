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

npm run dev
```

## 环境

> ✔️ 开发环境：Windows 10, Version 1803 + Chrome v68 + NodeJS v10.9.0

> ✔️ 开发环境：macOS, Version 10.12.6 + Chrome v68 + NodeJS v10.9.0

```bash
# for development
npm run dev

# from test
npm run publish:test

# for production
npm run publish:prod
```

## TODO

* [ ] [FE]使用Vuex重构前期件
* [ ] [FE]重构qiniu-img-upload图片上传组件
* [ ] [BE]修正Article-Controller业务逻辑-根据不同角色用户改变status
* [ ] [FE]再次封装axios，对错误信息预先提示
* [ ] [BE]修复require.context不支持绝对路径问题
* [x] [BE]~~优化ArticleQuery查询结果，节省不必要资源缓存~~
* [ ] [FE]index页中tagsRouter优化
* [ ] [FE]index页注册快捷键操作

参考资料

[Nuxt.js docs](https://github.com/nuxt/nuxt.js)

[iview docs](https://www.iviewui.com/docs/guide/install)

[iview-admin](https://github.com/iview/iview-admin)

[koa-template](https://github.com/nuxt-community/koa-template)
