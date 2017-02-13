import Vue from 'vue';
import App from './App.vue';

Vue.filter('to-low-case', function(value) {
  return value.toLowerCase();
});

const app = new Vue({
  render: h => h(App),
});

app.$mount('#app');
