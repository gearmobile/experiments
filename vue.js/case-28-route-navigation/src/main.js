import Vue from 'vue'

import VueRouter from 'vue-router'


import App from './App.vue'
import Home from './components/home.vue'
import Users from './components/users.vue'
import Contacts from './components/contacts.vue'

Vue.use( VueRouter );

const newRouter = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/users', component: Users },
    { path: '/contacts', component: Contacts },
  ]
});

new Vue({
  el: '#app',
  router: newRouter,
  render: h => h(App)
})
