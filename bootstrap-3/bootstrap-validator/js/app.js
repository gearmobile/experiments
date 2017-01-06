$( document ).ready( function () {
    var form = $( '#test' );
    var formOptions = {
        feedback: {
            success: 'fa-check-circle',
            error: 'fa-times-circle'
        }
    };
    form.validator( formOptions );
});