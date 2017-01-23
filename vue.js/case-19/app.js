
var wm = new Vue({
    el: '#app',
    data: {
        modalState: false;
    },
    methods: {
        modalToggle() {
            this.modalState = !this.modalState;
        }
    },
    computed: {
        modalStyle() {
            return this.modalState ? { display: 'block' } : {}
        }
    }
});
