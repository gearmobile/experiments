$( document ).ready( function() {

    // BLOCK EQUAL HEIGHT
    // --------------------------------------------
    $( '.block-equal' ).matchHeight();

    // BACK TO TOP
    // --------------------------------------------
    var backToTop = $( '#back-to-top' );
    $( window ).scroll( function () {
        if ( $( this ).scrollTop() > 50 ) {
            $( backToTop ).fadeIn();
        } else {
            $( backToTop ).fadeOut();
        }
    });
    // scroll body to 0px on click
    backToTop.click( function () {
        backToTop.tooltip( 'hide' );
        $( 'body, html' ).animate({ scrollTop: 0 }, 800 );
        return false;
    });
    backToTop.tooltip( 'show' );

    // DATEPICKER
    // -------------------------------------------

    // SET DATE VARIABLES
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    var today = new Date( year, month, day );

    var reservationCheckOut = $( '#reservationCheckOut' );
    var reservationCheckIn = $( '#reservationCheckIn' );

    // DATEPICKER
    $( '#dataPicker' ).datepicker({
        format: 'mm-dd-yyyy',
        todayHighlight: true,
        autoclose: true,
        container: '#dataPicker'
    });
    $( '#reservationCheckOut, #reservationCheckIn' ).datepicker( 'setDate', today );

});
