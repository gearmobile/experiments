// https://coligo.io/learn-vuex-by-building-notes-app/
import Vue from 'vue';
import App from './App.vue';
import store from './store/store';

const app = new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
