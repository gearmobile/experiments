
var wm = new Vue({
    el: '#container',
    data: {
        text: ''
    },
    // объект с вычисляемыми свойствами
    computed: {
        // произвольное свойство, значение которого будет вычисляться
        count: function () {
            return this.text.length
        }
    }
});