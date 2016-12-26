$( document ).ready( function() {

    // BLOCK EQUAL HEIGHT
    $( '.block-equal' ).matchHeight();

    // HIGHLIGHT THE ACTIVE NAV LINK
    var url = window.location.pathname;
    var filename = url.substr(url.lastIndexOf( '/' ) + 1);
    $( '.navbar a[href$="' + filename + '"]').parent().addClass( 'active' ).siblings().removeClass( 'active' );

});
