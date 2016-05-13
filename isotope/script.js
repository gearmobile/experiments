var grid = $('.grid');
var buttons = $('.grid__button');

grid.isotope({
    itemSelector: '.grid__item',
    percentPosition: true,
    masonry: {
        columnWidth: '.grid__sizer'
    }
});

buttons.on('click', function () {
    var filterValue = $( this ).attr('data-filter');
    grid.isotope({ filter: filterValue });
});