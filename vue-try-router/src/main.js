import Vue from 'vue';
import VueRouter from 'vue-router';
//
import App from './App.vue';
import appHome from './components/home.vue';
import appUsers from './components/users.vue';

[VueRouter].forEach(p => Vue.use(p));

const routes = [
  { path: '/', component: appHome },
  { path: '/users', component: appUsers },
];

const router = new VueRouter({
  mode: 'history', // hash, history, abstract
  routes,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
