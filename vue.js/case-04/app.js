// https://ru.vuejs.org/v2/guide/

// prevent
// stop

new Vue({
    el: '#app',
    methods: {
        fnHandle: function () {
            console.log( 'hello' );
             // e.preventDefault();
        }
    }
});

new Vue({
    el: '#count',
    data: {
        count: 0
    },
    methods: {
        fnCount: function () {
            this.count += 1;
        }
    }
});