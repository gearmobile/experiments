$( document ).ready( function() {
    $( '.block-equal' ).matchHeight();
    // ---------------------------------
    // $('ul.nav > li').click(function (e) {
    //     e.preventDefault();
    //     $('ul.nav > li').removeClass('active');
    //     $(this).addClass('active');
    // });
    $( '.header-main__primary a' ).on( 'click', function(){
        // console.log( $(this).attr( 'href' ) );
        // $(this).parent().addClass( 'active' );
        // alert( 'Click' );
        // var this = $(this);
        // $( '.header-main__primary' ).find( '.active' ).removeClass( 'active' );
        // $( this ).parent().addClass( 'active' );
    });
});

// $(document).ready(function () {
//     $('ul.nav > li').click(function (e) {
//         e.preventDefault();
//         $('ul.nav > li').removeClass('active');
//         $(this).addClass('active');
//     });
// });