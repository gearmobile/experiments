
new Vue({
    el: '#container',
    components: {
        counter: {
            template: '#counter-template',
            data: function () {
                return {
                    count: 0
                }
            },
            methods: {
                onCount: function () {
                    this.count += 1;
                }
            },
            props: {
                subject: {
                    type: String,
                    default: ''
                }
            }
        }
    }
});
