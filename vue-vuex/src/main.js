import Vue from 'vue';
import App from './App.vue';
import store from './store/store';

new Vue({
  store, // указываем хранилище в опции "store", что обеспечит доступ к нему также и для всех дочерних компонентов
  render: h => h(App)
}).$mount('#app');
