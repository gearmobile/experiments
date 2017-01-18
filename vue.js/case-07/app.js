
window.addEventListener( 'load', function () {

    var vw = new Vue({
        el: '#container',
        data: {
            currentFigure: 'square-figure'
        },
        components: {
            'square-figure': {
                template: '#square-template'
            },
            'triangle-figure': {
                template: '#triangle-template'
            },
            'circle-figure': {
                template: '#circle-template'
            },
            'oval-figure': {
                template: '#oval-template'
            }
        },
        methods: {
            onSwitch: function ( view ) {
                this.currentFigure = view;
            }
        }
    });

});

