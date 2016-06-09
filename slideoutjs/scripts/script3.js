window.addEventListener('DOMContentLoaded', function () {

    var sidebar = document.querySelector('#sidebar');
    var navbar = document.querySelector('#navbar');
    var main = document.querySelector('#main');
    var blockFixed = document.querySelector('.fixed');
    var sidebarWidth = 256;
    var navbarWidth = 256;
    var btnSidebar = document.querySelector('.button-sidebar');
    var btnNavbar = document.querySelector('.button-navbar');


    var leftSlideout = new Slideout({
        'panel': main,
        'menu': sidebar,
        'padding': sidebarWidth,
        'tolerance': 70
    });


    var rightSlideout = new Slideout({
        'panel': main,
        'menu': navbar,
        'padding': navbarWidth,
        'tolerance': 70,
        'side': 'right'
    });


    btnSidebar.addEventListener('click', function () {

        leftSlideout.toggle();
        sidebar.style.zIndex = '0';

        leftSlideout.on('close', function () {
            sidebar.style.zIndex = '-1';
        });

    });

    leftSlideout.on('beforeopen', function () {
        blockFixed.classList.add('fixed-open-left');
    });

    leftSlideout.on('beforeclose', function () {
        blockFixed.classList.remove('fixed-open-left');
    });


    btnNavbar.addEventListener('click', function () {

        rightSlideout.toggle();
        navbar.style.zIndex = '0';

        rightSlideout.on('close', function () {
            navbar.style.zIndex = '-1';
        });

    });

    rightSlideout.on('beforeopen', function () {
        blockFixed.classList.add('fixed-open-right');
    });

    rightSlideout.on('beforeclose', function () {
        blockFixed.classList.remove('fixed-open-right');
    });


}, false);
