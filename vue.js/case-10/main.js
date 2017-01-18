var Vue = require( 'vue' );
var headComponent = require( 'vue!./components/hello.vue' );
var cardsComponent = require( 'vue!./components/cards.vue' );

new Vue({
    el: '#wrapper',
    components: {
        heading: headComponent,
        gallery: cardsComponent
    }
});