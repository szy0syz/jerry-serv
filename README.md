# jerry-serv

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

## 开发

```bash
npm run dev

// GO to http://127.0.0.1:3000
```

## 测试环境

```bash
// 需要pm2，如果没有安装的先安装  npm install -g pm2
npm run publish:test
```

## 生产环境

```bash
// 需要pm2，如果没有安装的先安装  npm install -g pm2
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
