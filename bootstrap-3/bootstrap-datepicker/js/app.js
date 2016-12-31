$( document ).ready( function () {

    // SIMPLE
    $( '#sandbox-container input' ).datepicker({
        autoclose: true,
        orientation: 'auto top',
        todayHighlight: true,
        container: '#sandbox-container'
    });

    // COMPONENT
    $( '#datePicker' ).datepicker({
        format: 'mm/dd/yyyy',
        container: '#datePicker',
        orientation: 'auto top',
        todayHighlight: true,
        autoclose: true
    });

});