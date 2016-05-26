'use strict';

var $ = require('jquery');
var Isotope = require('isotope-layout');

var isoGrid = new Isotope( '.grid', {
    itemSelector: '.grid .grid__item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid .grid__sizer'
    }
});



$('.grid__controls button').on('click', function () {
    var filterValue = $( this ).attr('data-filter');
    var isoGridFilter = new Isotope( '.grid', {
        filter: filterValue
    });
});
