import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _7d2d3872 = () => import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */).then(m => m.default || m)
const _073f60fa = () => import('..\\pages\\error-page\\error-page.vue' /* webpackChunkName: "pages_error-page_error-page" */).then(m => m.default || m)
const _248afcd3 = () => import('..\\pages\\system\\log.vue' /* webpackChunkName: "pages_system_log" */).then(m => m.default || m)
const _4400b71c = () => import('..\\pages\\tables\\editable-table.vue' /* webpackChunkName: "pages_tables_editable-table" */).then(m => m.default || m)
const _35b94443 = () => import('..\\pages\\extended\\swiper.vue' /* webpackChunkName: "pages_extended_swiper" */).then(m => m.default || m)
const _64a98204 = () => import('..\\pages\\form\\work-flow.vue' /* webpackChunkName: "pages_form_work-flow" */).then(m => m.default || m)
const _3e562a0e = () => import('..\\pages\\article\\type.vue' /* webpackChunkName: "pages_article_type" */).then(m => m.default || m)
const _3507239f = () => import('..\\pages\\error-page\\500.vue' /* webpackChunkName: "pages_error-page_500" */).then(m => m.default || m)
const _0a2500e2 = () => import('..\\pages\\form\\preview.vue' /* webpackChunkName: "pages_form_preview" */).then(m => m.default || m)
const _5aa39f53 = () => import('..\\pages\\release\\info.vue' /* webpackChunkName: "pages_release_info" */).then(m => m.default || m)
const _004b2ee1 = () => import('..\\pages\\error-page\\403.vue' /* webpackChunkName: "pages_error-page_403" */).then(m => m.default || m)
const _3a2a476d = () => import('..\\pages\\article\\tags.vue' /* webpackChunkName: "pages_article_tags" */).then(m => m.default || m)
const _00594662 = () => import('..\\pages\\error-page\\404.vue' /* webpackChunkName: "pages_error-page_404" */).then(m => m.default || m)
const _68b11c30 = () => import('..\\pages\\extended\\nav.vue' /* webpackChunkName: "pages_extended_nav" */).then(m => m.default || m)
const _30eb8412 = () => import('..\\pages\\system\\role.vue' /* webpackChunkName: "pages_system_role" */).then(m => m.default || m)
const _73b9be44 = () => import('..\\pages\\article\\edit.vue' /* webpackChunkName: "pages_article_edit" */).then(m => m.default || m)
const _30e81268 = () => import('..\\pages\\system\\user.vue' /* webpackChunkName: "pages_system_user" */).then(m => m.default || m)
const _924a0d1c = () => import('..\\pages\\article\\list.vue' /* webpackChunkName: "pages_article_list" */).then(m => m.default || m)
const _22477d2a = () => import('..\\pages\\article\\publish.vue' /* webpackChunkName: "pages_article_publish" */).then(m => m.default || m)
const _47147298 = () => import('..\\pages\\release\\activity.vue' /* webpackChunkName: "pages_release_activity" */).then(m => m.default || m)
const _107c7ea0 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



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
			component: _7d2d3872,
			name: "login"
		},
		{
			path: "/error-page/error-page",
			component: _073f60fa,
			name: "error-page-error-page"
		},
		{
			path: "/system/log",
			component: _248afcd3,
			name: "system-log"
		},
		{
			path: "/tables/editable-table",
			component: _4400b71c,
			name: "tables-editable-table"
		},
		{
			path: "/extended/swiper",
			component: _35b94443,
			name: "extended-swiper"
		},
		{
			path: "/form/work-flow",
			component: _64a98204,
			name: "form-work-flow"
		},
		{
			path: "/article/type",
			component: _3e562a0e,
			name: "article-type"
		},
		{
			path: "/error-page/500",
			component: _3507239f,
			name: "error-page-500"
		},
		{
			path: "/form/preview",
			component: _0a2500e2,
			name: "form-preview"
		},
		{
			path: "/release/info",
			component: _5aa39f53,
			name: "release-info"
		},
		{
			path: "/error-page/403",
			component: _004b2ee1,
			name: "error-page-403"
		},
		{
			path: "/article/tags",
			component: _3a2a476d,
			name: "article-tags"
		},
		{
			path: "/error-page/404",
			component: _00594662,
			name: "error-page-404"
		},
		{
			path: "/extended/nav",
			component: _68b11c30,
			name: "extended-nav"
		},
		{
			path: "/system/role",
			component: _30eb8412,
			name: "system-role"
		},
		{
			path: "/article/edit",
			component: _73b9be44,
			name: "article-edit"
		},
		{
			path: "/system/user",
			component: _30e81268,
			name: "system-user"
		},
		{
			path: "/article/list",
			component: _924a0d1c,
			name: "article-list"
		},
		{
			path: "/article/publish",
			component: _22477d2a,
			name: "article-publish"
		},
		{
			path: "/release/activity",
			component: _47147298,
			name: "release-activity"
		},
		{
			path: "/",
			component: _107c7ea0,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
