var Vue = require( 'vue' );
var VueResource = require( 'vue-resource' );

// COMPONTENTS
// ---------------------------------------------
var App = require( './components/app.vue' );

new Vue({
  el: '#wrapper',
  components: {
    'page-header': App
  }
});
