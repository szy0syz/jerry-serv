# jerry-serv

## 技术栈

* `nuxt`          服务端渲染
* `vue/vuex`      vue
* `axios`         Promise http client
* `mongoose`      MongoDB-ORM
* `casbin`        RBAC权限管理
* `ramda`         functional编程
* `backpack`      nodejs build
* `echarts`       数据可视化
* `Puppeteer`     爬虫-无头浏览器
* `quill-editor`  富文本编辑器
* `JWT`           无状态token鉴权

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

* [ ] 使用Vuex重构前期件
* [ ] 重构qiniu-img-upload图片上传组件
* [ ] 修正Article-Controller业务逻辑-根据不同角色用户改变status
* [ ] 再次封装axios，对错误信息预先提示
* [ ] 修复require.context不支持绝对路径问题
* [ ] 优化ArticleQuery查询结果，节省不必要资源缓存
* [ ] index页中tagsRouter优化
* [ ] index页注册快捷键操作

参考资料

[Nuxt.js docs](https://github.com/nuxt/nuxt.js)

[iview docs](https://www.iviewui.com/docs/guide/install)

[iview-admin](https://github.com/iview/iview-admin)

[koa-template](https://github.com/nuxt-community/koa-template)
