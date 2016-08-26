var elasticSVG = require( 'elastic-svg' );

window.addEventListener( 'load', function () {
    var primary = document.querySelector( '.block-elastic__primary' );
    var secondary = document.querySelector( '.block-elastic__secondary' );

    var prim = elasticSVG( primary, {
        height: 90
    });
}, false );

