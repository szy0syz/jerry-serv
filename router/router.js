// router.js
// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: '/',
  name: 'otherRouter',
  children: [
    {
      path: '/index',
      title: '主页',
      name: 'index',
      icon: 'ios-home'
    },
    {
      path: '/article/publish',
      title: '文档发布',
      name: 'article-publish',
      icon: 'ios-home'
    },
    {
      path: '/article/edit/:_id',
      title: '文档编辑',
      name: 'article-edit',
      icon: 'ios-home'
    },
    {
      path: '/form/work-flow',
      title: '工作流',
      name: 'form-work-flow',
      icon: 'arrow-swap'
    }
  ]
}

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
  {
    path: '/article',
    icon: 'android-checkbox',
    title: '文档管理',
    name: 'article',
    children: [
      {
        path: '/article/list',
        title: '文档管理',
        name: 'article-list',
        icon: 'close-circled'
      },
      {
        path: '/article/type',
        title: '文档类别',
        name: 'article-type',
        icon: 'alert-circled'
      },
      {
        path: '/article/tags',
        title: '文档标签',
        name: 'article-tags',
        icon: 'alert-circled'
      }
    ]
  },
  {
    path: '/release',
    icon: 'android-checkbox',
    title: '发布管理',
    name: 'release',
    children: [
      {
        path: '/release/info',
        title: '信息管理',
        name: 'release-info',
        icon: 'android-checkbox'
      },
      {
        path: '/release/activity',
        title: '活动管理',
        name: 'release-activity',
        icon: 'android-checkbox'
      }
    ]
  },
  {
    path: '/extended',
    icon: 'ios-grid-view',
    title: '扩展功能',
    name: 'extended',
    children: [
      {
        path: '/extended/nav',
        title: '首页导航',
        icon: 'arrow-move',
        name: 'extended-nav'
      },
      {
        path: '/extended/extended-swiper',
        title: '首页轮播',
        icon: 'edit',
        name: 'extended-swiper'
      }
    ]
  },
  {
    path: '/system',
    icon: 'ios-grid-view',
    title: '系统管理',
    name: 'system',
    children: [
      {
        path: '/system/user',
        title: '用户管理',
        icon: 'arrow-move',
        name: 'system-user'
      },
      {
        path: '/system/auth',
        title: '权限管理',
        icon: 'arrow-move',
        name: 'system-auth'
      },
      {
        path: '/system/role',
        title: '角色管理',
        icon: 'edit',
        name: 'system-role'
      },
      {
        path: '/system/log',
        title: '系统日志',
        icon: 'edit',
        name: 'system-log'
      }
    ]
  },
  {
    path: '/error-page',
    icon: 'android-sad',
    title: '错误页面',
    name: 'errorpage',
    children: [
      {
        path: '/error-page/403',
        title: '403错误',
        name: 'error-page-403',
        icon: 'close-circled'
      },
      {
        path: '/error-page/404',
        title: '404错误',
        name: 'error-page-404',
        icon: 'alert-circled'
      },
      {
        path: '/error-page/500',
        title: '500错误',
        name: 'error-page-500',
        icon: 'settings'
      }
    ]
  }
]