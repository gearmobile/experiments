import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

[VueResource].forEach(p => Vue.use(p));

new Vue({
  render: h => h(App),
}).$mount('#app');
