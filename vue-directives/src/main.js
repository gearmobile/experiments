import Vue from 'vue';
import App from './App.vue';

Vue.directive('bgc', {
  //
});

const app = new Vue({
  render: h => h(App),
});

app.$mount('#app');
