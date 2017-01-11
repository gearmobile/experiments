
new Vue({
    el: '#container',
    data: {
        message: ''
    },
    methods: {
        showModal: function () {
            console.log( 'hello' );
        },
        onPress: function () {
            console.log( this.message );
        }
    }
});