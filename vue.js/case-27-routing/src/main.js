import Vue from 'vue'

// INCLUDE VUE PLUGINS
// ----------------------------------
import VueRouter from 'vue-router'

// LIST OF VUE COMPONENTS
// -----------------------------------
import App from './App.vue'
import Home from  './components/Home.vue'
import Users from './components/Users.vue'

// LIST OF USED VUE PLUGINS
// -----------------------------------
Vue.use( VueRouter );

// NEW ROUTER
// -----------------------------------
const newRouter = new VueRouter({
  routes: [
    { path: '/users', component: Users },
    { path: '/', component: Home }
  ]
});

// NEW VUE INSTANCE
// -----------------------------------
new Vue({
  el: '#app',
  router: newRouter,
  render: h => h(App)
})
