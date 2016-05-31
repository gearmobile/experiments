// http://api.jquery.com/animate/

$(document).ready( function () {

    function getRandom() {
        return Math.random();
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var wrappers = $('.wrapper');
    wrappers.each(function () {
        var current = $(this);
        var red = getRandomInt(0,255);
        var green = getRandomInt(0,255);
        var blue = getRandomInt(0,255);
        var alpha = getRandom();
        var color = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
        current.css('background-color', color);
    });

    var counters = $('.count');
    var buttonCount = $('.count-button');

    counters.text('0');

    buttonCount.one('click', function () { // one - the click event works only once
        counters.each( function () {
            var current = $(this);
            $( { Counter: 0 } ).animate( { Counter: current.attr('data-stop') }, {
                duration: 2000,
                easing: 'swing',
                step: function ( now ) {
                    current.text(Math.ceil( now ));
                }
            });
        });
    });

    var blockScrolled = $('.scrolled');
    var spins = $('.spin');

    spins.text('0');

    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > blockScrolled.offset().top - $(window).height() / 2 ) {
            spins.each( function () {
                var current = $(this);
                $( { Spin: 0 }).animate( { Spin: current.attr('data-stop') }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function ( now ) {
                        current.text( Math.ceil( now ) );
                    }
                });
            });
            $(window).off('scroll'); // kill the scroll event
        }
    });

});





























