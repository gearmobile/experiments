import Vue from 'vue'
import VueRouter from 'vue-router'

// LIST OF COMPONENTS
// -----------------------------------
import App from './App.vue'
import Home from  './components/Home.vue'
import Users from './components/Users.vue'

Vue.use( VueRouter );

const newRouter = new VueRouter({
  routes: [
    { path: '/users', component: Users },
    { path: '/', component: Home }
  ]
});

new Vue({
  el: '#app',
  router: newRouter,
  render: h => h(App)
})
