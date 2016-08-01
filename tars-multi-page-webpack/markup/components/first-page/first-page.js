
var Isotope = require( 'isotope-layout' );

var firstPageGrid = document.querySelector( '.first-page .grid' );
var firstPageSizer = '.first-page .grid__sizer';
var firstPageItem = '.first-page .grid__item';
var firstPageLayout;

firstPageLayout = new Isotope( firstPageGrid, {
    itemSelector: firstPageItem,
    percentPosition: true,
    masonry: {
        columnWidth: firstPageSizer
    }
});
