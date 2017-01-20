
new Vue({
    el: '#container',
    data: {
        count: 0
    },
    methods: {
        formSubmit: function () {
            console.log( 'From submitted' );
        },
        onButton: function () {
            this.count += 1;
        }
    }
});
