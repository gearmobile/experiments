
var data = {
    title: 'my shopping list',
    fruits: [
        {
            name: 'apple',
            status: true
        },
        {
            name: 'cherry',
            status: false
        },
        {
            name: 'apricot',
            status: true
        },
        {
            name: 'lemon',
            status: false
        },
        {
            name: 'orange',
            status: false
        }
    ],
    newItem: ''
};

var wm = new Vue({
    el: '#container',
    data: data,
    methods: {
        addItem: function () {
            var text = this.newItem.trim();
            if ( text ) {
                this.fruits.push({
                    name: text,
                    status: false
                })
            }
            this.newItem = '';
        }
    }
});