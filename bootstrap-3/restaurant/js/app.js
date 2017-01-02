$( document ).ready( function() {

    var date = new Date();
    var nowDay = date.getDate();
    var nowMonth = date.getMonth();
    var nowYear = date.getFullYear();
    var today = new Date( nowYear, nowMonth, nowDay );

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
    var reservationCheckOut = $( '#reservationCheckOut' );
    var reservationCheckIn = $( '#reservationCheckIn' );
    var currDate;

    var optsDatePicker = {
        format: 'mm-dd-yyyy',
        todayHighlight: true,
        autoclose: true,
        container: '#datePicker'
    };

    datePicker.datepicker( optsDatePicker );
    datePicker.datepicker( 'setDate', today );

    console.log( currDate );

    // SET CURRENT DATE FOR CHECK OUT FIELD
    // var newNowday =
    if ( nowDay < 10 ) {
        var newNowday = '0' + nowDay;
    }
    var newNowMonth = nowMonth + 1;
    if ( newNowMonth < 10 ) {
        newNowMonth = '0' + newNowMonth;
    }
    var nowDate = newNowMonth + '-' + newNowday + '-' + nowYear;
    reservationCheckOut.attr( 'value', nowDate );

    // ------------------------------------------
    datePicker.on( 'change', function () {

        var limit = 1;
        currDate = reservationCheckIn.val();
        console.log( currDate );
        var currDateN =  currDate.split( '-' );
        var day = parseInt( currDateN[1] ) + limit;

        if ( day < 10 ) {
            day = '0' + day;
        }

        if ( day > '31' ) {
            alert( 'Wrong choice!' );
            reservationCheckIn.attr( 'value', nowDate );
            return false;
        } else {
            currDateN[1] = day;
            var newDate = currDateN.join( '-' );
            reservationCheckOut.val( newDate );
        }

    });


});
