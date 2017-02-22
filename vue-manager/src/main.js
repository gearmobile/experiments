import Vue from 'vue';
import vueResource from 'vue-resource';
import App from './App';
import router from './router';

Vue.use(vueResource);
Vue.http.options.root = 'https://customermanagerapp.firebaseio.com/data.json';

const app = new Vue({
  router,
  template: '<App/>',
  components: { App },
});

app.$mount('#app');
