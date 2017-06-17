import Vue from 'vue'
import App from './App.vue'
import pluralize from 'pluralize-ru'

Vue.use(pluralize)

new Vue({
  el: '#app',
  render: h => h(App)
})
