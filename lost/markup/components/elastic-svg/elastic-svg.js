var elasticSVG = require( 'elastic-svg' );

window.addEventListener( 'load', function () {
    // -----------------------------------------------------------------
    var primary = document.querySelector( '.block-elastic__primary' );
    var secondary = document.querySelector( '.block-elastic__secondary' );
    // -----------------------------------------------------------------
    var primSVG = elasticSVG( '.block-elastic__primary', {
        aspect: 0.5
    });
    // -----------------------------------------------------------------
}, false );

