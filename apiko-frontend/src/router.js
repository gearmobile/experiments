import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { path: '/', component: load('Index') }, // default page
    { path: '/login', component: load('pages/login') }, // login user
    { path: '/register', component: load('pages/register') }, // register user
    { path: '/get-users-list', component: load('pages/get-users-list') }, // get users list
    { path: '/get-user-profile', component: load('pages/get-user-profile') }, // get user profile
    { path: '*', component: load('Error404') } // not found page
  ]
})
