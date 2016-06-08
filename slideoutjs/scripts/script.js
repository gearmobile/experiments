// https://github.com/mango/slideout#usage
// http://codepen.io/gearmobile/pen/ZbbQBw

window.addEventListener('load', function () {

    var btnLeft = document.querySelector('.button-left');
    //var btnRight = document.querySelector('.button-right');

    var slideoutLeft = new Slideout ({
        'panel': document.querySelector('#main'),
        'menu': document.querySelector('#sidebar'),
        'padding': 300,
        'tolerance': 70,
        'duration': 500,
        'fx': 'ease-in-out',
        'side': 'left'
    });

    //var slideoutRight = new Slideout ({
    //    'panel': document.querySelector('#main'),
    //    'menu': document.querySelector('#card'),
    //    'padding': 300,
    //    'tolerance': 70,
    //    'duration': 500,
    //    'fx': 'ease-in-out',
    //    'side': 'right'
    //});

    btnLeft.addEventListener('click', function () { slideoutLeft.toggle(); });
    //btnRight.addEventListener('click', function () { slideoutRight.toggle(); });

}, false);