window.addEventListener('DOMContentLoaded', function () {

    var btnSidebar = document.querySelector('.button-sidebar');
    var blockFixed = document.querySelector('.fixed');
    var blockMain = document.querySelector('#main');
    var blockSidebar = document.querySelector('#sidebar');
    var blockSidebarWidth = 256;

    var slideoutSidebar = new Slideout({
        'panel': blockMain,
        'menu': blockSidebar,
        'padding': blockSidebarWidth,
        'tolerance': 70,
        'side': 'right', // move sidebar to right
        'touch': false
    });

    btnSidebar.addEventListener('click', function () {
        slideoutSidebar.toggle();
    });

    slideoutSidebar.on('beforeopen', function () {
        blockFixed.classList.add('fixed-open');
    });

    slideoutSidebar.on('beforeclose', function () {
        blockFixed.classList.remove('fixed-open');
    });

}, false);