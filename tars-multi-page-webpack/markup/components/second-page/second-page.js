var Isotope = require( 'isotope-layout' );

var secondPageGrid = document.querySelector( '.second-page .grid' );
var secondPageSizer = '.second-page .grid__sizer';
var secondPageItem = '.second-page .grid__item';
var secondPageLayout;

secondPageLayout = new Isotope( secondPageGrid, {
    itemSelector: secondPageItem,
    percentPosition: true,
    masonry: {
        columnWidth: secondPageSizer
    }
});

module.exports = {};
