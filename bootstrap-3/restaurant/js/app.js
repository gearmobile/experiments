$( document ).ready( function() {

    var date = new Date();
    var nowDay = date.getDate();
    var nowMonth = date.getMonth();
    var nowYear = date.getFullYear();
    var today = new Date( nowYear, nowMonth, nowDay );

    // if ( nowDay < 10 ) {
    //     nowDay = '0' + nowDay;
    // }
    // nowMonth = nowMonth + 1;
    // if ( nowMonth < 10 ) {
    //     nowMonth = '0' + nowMonth;
    // }
    // var nowDate = nowMonth + '-' + nowDay + '-' + nowYear;
    // $( '#reservationCheckOut' ).attr( 'value', nowDate );

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
    var datePicker = $( '#datePicker' );
    var optsDatePicker = {
        format: 'mm-dd-yyyy',
        todayHighlight: true,
        autoclose: true,
        container: '#datePicker'
    };

    datePicker.datepicker( optsDatePicker );
    datePicker.datepicker( 'setDate', today );

    // SET CURRENT DATE FOR CHECK OUT FIELD
    if ( nowDay < 10 ) {
        nowDay = '0' + nowDay;
    }
    nowMonth = nowMonth + 1;
    if ( nowMonth < 10 ) {
        nowMonth = '0' + nowMonth;
    }
    var nowDate = nowMonth + '-' + nowDay + '-' + nowYear;
    $( '#reservationCheckOut' ).attr( 'value', nowDate );

});
