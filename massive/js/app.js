window.addEventListener( 'DOMContentLoaded', function () {
    //
    var counter = 1;
    var object = {};
    var inputs = document.querySelectorAll( '.form-control' );
    var submit = document.querySelector( '#submit' );

    function createObject() {

        inputs.forEach( function ( item ) {
            var itemID = item.id;
            object[itemID] = item.value;
            localStorage.setItem( counter.toString(), JSON.stringify( object ) );
        });
    }
    //

    submit.addEventListener( 'click', function ( event ) {
        event.preventDefault();
        try {
            createObject();
            console.log( object );
        } catch ( e ) {
            console.log( e );
        }
    });
    //
}, false);