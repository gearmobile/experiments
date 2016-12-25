$( '.topheader .navbar-nav a' ).on( 'click', function () {
    $(this).parent().siblings().removeClass( 'active' );
} );