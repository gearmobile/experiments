
var wm = new Vue({
    el: '#container',
    data: {
        message: 'Hello from Vue.js',
        favFruits: [],
        fruits: [ 'apple', 'orange', 'grape', 'pineapple' ]
    },
    methods: {
        onClick: function ( element ) {
            if ( this.favFruits.indexOf( element ) === -1 ) { // returns -1 if the item is not found
                this.favFruits.push( element );
                this.message = element;
            }
        },
        clearSelection: function () { // clear array favFruits
            for ( var i = this.favFruits.length; i > 0; i-- ) {
                this.favFruits.pop();
            }
        }
    },
    computed: {
        reversedMessage: function () {
            var length = this.favFruits.length;
            if ( length > 1 ) {
                return this.favFruits.slice( 0, length-1 ).join( ', ' ).concat( ' and ', this.favFruits[ length-1 ] );
            } else if ( length === 1 ) {
                return this.favFruits[0];
            } else {
                return false;
            }
        }
    }
});
