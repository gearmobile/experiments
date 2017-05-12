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
    // =================
    // USERS
    // =================
    { path: '/users', component: load('pages/users/users') }, // users
    // users get
    { path: '/users/get', component: load('pages/users/get/get-index') }, // users get index
    { path: '/users/get/list', component: load('pages/users/get/get-users-list') }, // users list
    { path: '/users/get/profile', component: load('pages/users/get/get-user-profile') }, // user profile
    { path: '/users/get/check', component: load('pages/users/get/get-user-check') }, // user check
    // users post
    { path: '/users/post', component: load('pages/users/post/post-index') }, // users post index
    { path: '/users/post/add', component: load('pages/users/post/post-user-add') }, // user add
    { path: '/users/post/login', component: load('pages/users/post/post-user-login') }, // user login
    { path: '/users/post/password-change', component: load('pages/users/post/post-user-password-change') }, // user password change
    { path: '/users/post/password-reset', component: load('pages/users/post/post-user-password-reset') }, // user password reset
    // users put
    { path: '/users/put', component: load('pages/users/put/put-index') }, // users put index
    { path: '/users/put/update', component: load('pages/users/put/put-user-update') }, // users put update
    // user delete
    { path: '/users/delete', component: load('pages/users/delete/delete-index') }, // users delete index
    { path: '/users/delete/user', component: load('pages/users/delete/delete-user-delete') }, // user delete
    { path: '/users/delete/users', component: load('pages/users/delete/delete-users-delete') }, // users delete
    // =================
    // FILES
    // =================
    { path: '/files', component: load('pages/files/files') }, // files
    // files get
    { path: '/files/get', component: load('pages/files/get/get-index') }, // get index
    { path: '/files/get/file', component: load('pages/files/get/get-file') }, // get file
    { path: '/files/get/files-list', component: load('pages/files/get/get-files-list') }, // get files
    // files post
    { path: '/files/post', component: load('pages/files/post/post-index') }, // post index
    { path: '/files/post/add', component: load('pages/files/post/post-file-add') }, // file add
    // files put
    { path: '/files/put', component: load('pages/files/put/put-index') }, // put index
    { path: '/files/put/update', component: load('pages/files/put/put-file-update') }, // file update
    // files delete
    { path: '/files/delete', component: load('pages/files/delete/delete-index') }, // delete index
    { path: '/files/delete/delete', component: load('pages/files/delete/delete-file-delete') }, // file delete
    //
    //
    //
    // setup
    { path: '/setup', component: load('pages/setup/setup') }, // setup
    //
    // core
    { path: '/core', component: load('pages/core/core') }, // core
    //
    // stats
    { path: '/stats', component: load('pages/stats/stats') }, // stats
    //
    // reference
    { path: '/reference', component: load('pages/reference/reference') }, // reference
    //
    // { path: '/login', component: load('pages/login') }, // login user
    // { path: '/register', component: load('pages/register') }, // register user
    // { path: '/get-users-list', component: load('pages/get-users-list') }, // get users list
    // { path: '/get-user-profile', component: load('pages/get-user-profile') }, // get user profile
    // { path: '/check-user', component: load('pages/check-user') }, // get user profile
    { path: '*', component: load('Error404') } // not found page
  ]
})
