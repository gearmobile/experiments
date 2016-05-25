'use strict';

const $ = require('jquery');
const Isotope = require('isotope-layout');
const imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin( $ );

// ISOTOPE LAYOUT
// -----------------------------------------------------------

var $iso1 = new Isotope( '.iso1', {
    itemSelector: '.iso1 .grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.iso1 .grid-sizer'
    }
});

// IMAGELOADED
// -----------------------------------------------------------

var $iso2 = new Isotope( '.iso2', {
    itemSelector: '.iso2 .grid-item',
    percentPosition: true,
    masonry: {
        columnWidth: '.iso2 .grid-sizer'
    }
});
