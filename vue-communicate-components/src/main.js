import Vue from 'vue';
import App from './App';

const eventBus = new Vue();
export default eventBus;

const app = new Vue({
  template: '<App/>',
  components: { App },
});

app.$mount('#app');
