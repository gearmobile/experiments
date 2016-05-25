'use strict';

const $ = require('jquery');
const Isotope = require('isotope-layout');

const isoGrid = new Isotope( '.grid', {
    itemSelector: '.grid .grid__item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid .grid__sizer'
    }
});
