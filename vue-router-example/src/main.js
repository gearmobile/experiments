import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Routes from './routes';

Vue.use(VueRouter);

const Router = new VueRouter({
  routes: Routes,
});

const app = new Vue({
  router: Router,
  render: h => h(App),
});

app.$mount('#app');
