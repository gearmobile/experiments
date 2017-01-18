
var Vue = require( 'vue' );
var hello = require( './components/hello.vue' );

var wm = new Vue({
    el: '#wrapper',
    components: {
        heading: hello
    }
});