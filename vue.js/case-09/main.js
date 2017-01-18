var Vue = require( 'vue' );
var hello = require( './components/hello.vue' );

var app = new Vue({
    el: '#wrapper',
    components: {
        hello: hello
    }
});