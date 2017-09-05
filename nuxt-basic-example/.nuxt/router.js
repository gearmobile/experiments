'use strict'

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const _fc6445cc = () => import('/Users/aarongreenberg/Projects/experiments/nuxt-basic-example/pages/index.vue')

const _ea3be6f0 = () => import('/Users/aarongreenberg/Projects/experiments/nuxt-basic-example/pages/team/index.vue')

const _9ffa8e8a = () => import('/Users/aarongreenberg/Projects/experiments/nuxt-basic-example/pages/contacts.vue')

const _62160255 = () => import('/Users/aarongreenberg/Projects/experiments/nuxt-basic-example/pages/about.vue')

const _1b4e61fe = () => import('/Users/aarongreenberg/Projects/experiments/nuxt-basic-example/pages/team/command.vue')

const _5e6d07ca = () => import('/Users/aarongreenberg/Projects/experiments/nuxt-basic-example/pages/team/history.vue')



const scrollBehavior = (to, from, savedPosition) => {
  // savedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // if no children detected
    if (to.matched.length < 2) {
      // scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // if one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // if link has anchor,  scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export default new Router({
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  scrollBehavior,
  routes: [
		{
			path: "/",
			component: _fc6445cc,
			name: "index"
		},
		{
			path: "/team",
			component: _ea3be6f0,
			name: "team"
		},
		{
			path: "/contacts",
			component: _9ffa8e8a,
			name: "contacts"
		},
		{
			path: "/about",
			component: _62160255,
			name: "about"
		},
		{
			path: "/team/command",
			component: _1b4e61fe,
			name: "team-command"
		},
		{
			path: "/team/history",
			component: _5e6d07ca,
			name: "team-history"
		}
  ]
})
