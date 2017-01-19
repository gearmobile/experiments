import Vue from 'vue';
import App from './components/start.vue';
import Gallery from './components/gallery.vue';

new Vue({
  el: '#app',
    components: {
      'page-header': App,
      'page-gallery': Gallery
    }
  // render: h => h(App, Gallery)
});
