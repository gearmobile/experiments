
window.addEventListener( 'load', function () {

    Vue.component( 'modal', {
        template: '#modal-template',
        data: function () {
            return {
                status: false
            }
        },
        methods: {
            open: function () {
                this.status = true;
            },
            close: function () {
                this.status = false;
            },
            cancel: function () {
                this.close();
            },
            confirm: function () {
                this.close();
            }
        },
        props: [ 'buttonYes', 'buttonNo', 'linkText' ]
    });

    Vue.component( 'hello', {
        template: '<h2>hello from vue</h2>'
    });

    Vue.component( 'greeting', {
        template: '#greeting-template'
    });

    var vw = new Vue({
        el: '#container'
    });

});

