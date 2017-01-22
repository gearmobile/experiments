
var wm = new Vue({
    el: '#app',
    data: {
        modalState: false
    },
    methods: {
        modalToggle: function () {
            this.modalState = !this.modalState;
        }
    },
    computed: {
        modalStyle: function () {
            return this.modalState ? { display: 'block' } : {}
        }
    }
});
