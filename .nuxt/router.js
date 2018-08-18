import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _665b254c = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _e8eb059e = () => import('../pages/article/tags.vue' /* webpackChunkName: "pages/article/tags" */).then(m => m.default || m)
const _5b49bc3c = () => import('../pages/error-page/404.vue' /* webpackChunkName: "pages/error-page/404" */).then(m => m.default || m)
const _023ad900 = () => import('../pages/tables/editable-table.vue' /* webpackChunkName: "pages/tables/editable-table" */).then(m => m.default || m)
const _787ef56c = () => import('../pages/extended/nav.vue' /* webpackChunkName: "pages/extended/nav" */).then(m => m.default || m)
const _dbc5087a = () => import('../pages/system/log.vue' /* webpackChunkName: "pages/system/log" */).then(m => m.default || m)
const _2c479d07 = () => import('../pages/system/role.vue' /* webpackChunkName: "pages/system/role" */).then(m => m.default || m)
const _014ae23f = () => import('../pages/extended/swiper.vue' /* webpackChunkName: "pages/extended/swiper" */).then(m => m.default || m)
const _083b2f36 = () => import('../pages/article/list.vue' /* webpackChunkName: "pages/article/list" */).then(m => m.default || m)
const _e093405c = () => import('../pages/article/type.vue' /* webpackChunkName: "pages/article/type" */).then(m => m.default || m)
const _2c4955dc = () => import('../pages/system/user.vue' /* webpackChunkName: "pages/system/user" */).then(m => m.default || m)
const _7ce750c8 = () => import('../pages/form/preview.vue' /* webpackChunkName: "pages/form/preview" */).then(m => m.default || m)
const _5b3ba4bb = () => import('../pages/error-page/403.vue' /* webpackChunkName: "pages/error-page/403" */).then(m => m.default || m)
const _dd878c94 = () => import('../pages/release/activity.vue' /* webpackChunkName: "pages/release/activity" */).then(m => m.default || m)
const _8c25f5b2 = () => import('../pages/article/publish.vue' /* webpackChunkName: "pages/article/publish" */).then(m => m.default || m)
const _66b45c5b = () => import('../pages/article/management.vue' /* webpackChunkName: "pages/article/management" */).then(m => m.default || m)
const _44dcfc40 = () => import('../pages/error-page/error-page.vue' /* webpackChunkName: "pages/error-page/error-page" */).then(m => m.default || m)
const _670fe355 = () => import('../pages/release/info.vue' /* webpackChunkName: "pages/release/info" */).then(m => m.default || m)
const _e010cd0e = () => import('../pages/error-page/500.vue' /* webpackChunkName: "pages/error-page/500" */).then(m => m.default || m)
const _40d3db84 = () => import('../pages/form/work-flow.vue' /* webpackChunkName: "pages/form/work-flow" */).then(m => m.default || m)
const _0a3fc6aa = () => import('../pages/tables/dragable-table.vue' /* webpackChunkName: "pages/tables/dragable-table" */).then(m => m.default || m)
const _032aca43 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/login",
			component: _665b254c,
			name: "login"
		},
		{
			path: "/article/tags",
			component: _e8eb059e,
			name: "article-tags"
		},
		{
			path: "/error-page/404",
			component: _5b49bc3c,
			name: "error-page-404"
		},
		{
			path: "/tables/editable-table",
			component: _023ad900,
			name: "tables-editable-table"
		},
		{
			path: "/extended/nav",
			component: _787ef56c,
			name: "extended-nav"
		},
		{
			path: "/system/log",
			component: _dbc5087a,
			name: "system-log"
		},
		{
			path: "/system/role",
			component: _2c479d07,
			name: "system-role"
		},
		{
			path: "/extended/swiper",
			component: _014ae23f,
			name: "extended-swiper"
		},
		{
			path: "/article/list",
			component: _083b2f36,
			name: "article-list"
		},
		{
			path: "/article/type",
			component: _e093405c,
			name: "article-type"
		},
		{
			path: "/system/user",
			component: _2c4955dc,
			name: "system-user"
		},
		{
			path: "/form/preview",
			component: _7ce750c8,
			name: "form-preview"
		},
		{
			path: "/error-page/403",
			component: _5b3ba4bb,
			name: "error-page-403"
		},
		{
			path: "/release/activity",
			component: _dd878c94,
			name: "release-activity"
		},
		{
			path: "/article/publish",
			component: _8c25f5b2,
			name: "article-publish"
		},
		{
			path: "/article/management",
			component: _66b45c5b,
			name: "article-management"
		},
		{
			path: "/error-page/error-page",
			component: _44dcfc40,
			name: "error-page-error-page"
		},
		{
			path: "/release/info",
			component: _670fe355,
			name: "release-info"
		},
		{
			path: "/error-page/500",
			component: _e010cd0e,
			name: "error-page-500"
		},
		{
			path: "/form/work-flow",
			component: _40d3db84,
			name: "form-work-flow"
		},
		{
			path: "/tables/dragable-table",
			component: _0a3fc6aa,
			name: "tables-dragable-table"
		},
		{
			path: "/",
			component: _032aca43,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
