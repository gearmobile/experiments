import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import Routes from './routes';

[VueResource, VueRouter].forEach(p => Vue.use(p));

const Router = new VueRouter({
  mode: 'history',
  routes: Routes,
});

const app = new Vue({
  router: Router,
  render: h => h(App),
});

app.$mount('#app');
