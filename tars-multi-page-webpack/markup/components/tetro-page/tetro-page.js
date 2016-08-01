
var Isotope = require( 'isotope-layout' );
var imagesLoaded = require( 'imagesloaded' );

var tetroGrid = document.querySelector( '.tetro-grid' );
var tetroGridSizer = '.tetro-grid__sizer';
var tetroGridItem = '.tetro-grid__item';
var tetroLayout;

imagesLoaded( tetroGrid, function () {
    tetroLayout = new Isotope( tetroGrid, {
        itemSelector: tetroGridItem,
        percentPosition: true,
        masonry: {
            columnWidth: tetroGridSizer
        }
    });
});
