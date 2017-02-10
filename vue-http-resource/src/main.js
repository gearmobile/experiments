import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);
Vue.http.options.root = 'https://vueresource-8a4dd.firebaseio.com/data.json';

const app = new Vue({
  render: h => h(App),
});

app.$mount('#app');
