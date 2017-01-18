
var wm = new Vue({
    el: '#wrapper',
    data: {
        messages: []
    },
    components: {
        message: {
            template: '<input v-model="message" @keyup.enter="onMessage" autofocus />',
            data: function () {
                return {
                    message: ''
                }
            },
            methods: {
                onMessage: function () {
                    this.$emit( 'save-message', this.message );
                    this.message = '';
                }
            }
        }
    },
    methods: {
        handleMessage: function ( message ) {
            this.messages.push( message );
            console.log( this.messages );
        }
    }
});
