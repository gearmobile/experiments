window.addEventListener( 'load', function () {

    // variables
    // ------------------------------------------------
    var list = document.querySelector( '#shoppingList' );

    // generate close button for all of list items
    // ------------------------------------------------
    list.querySelectorAll( 'li' ).forEach( function ( item ) {
        var span = document.createElement( 'span' );
        var spanText = document.createTextNode( '\u00D7' );
        span.appendChild( spanText );
        span.setAttribute( 'class', 'close' );
        item.appendChild( span );
    });

    // delete current item when it's close button pressed
    // --------------------------------------------------
    list.addEventListener( 'click', function ( event ) {
        var targetElement = event.target;
        if ( event && targetElement.classList.contains( 'close' ) ) {
            var parent = targetElement.parentNode.parentNode;
            parent.removeChild( targetElement.parentNode );
        }
    });

    // add class checked to checked item of list
    // ------------------------------------------------
    list.addEventListener( 'click', function ( event ) {
        var targetElement = event.target;
        if ( event && targetElement.tagName === 'LI' ) {
            targetElement.classList.toggle( 'checked' );
        }
    });

    // generate new item of list when button add is pressed
    // ------------------------------------------------
    function createItemList() {
        var inputValue = document.querySelector( '#shoppingInput' ).value;
        if ( inputValue === '' ) {
            alert( 'You must write something!' );
            return false;
        } else {
            var item = document.createElement( 'li' );
            var itemValue = document.createTextNode( inputValue );
            var span = document.createElement( 'span' );
            var spanText = document.createTextNode( '\u00D7' );
            span.appendChild( spanText );
            span.setAttribute( 'class', 'close' );
            item.appendChild( span );
            item.appendChild( itemValue );
            list.appendChild( item );
            document.querySelector( '#shoppingInput' ).value = '';
        }
    }

    // catch submit on form
    document.getElementById( 'shoppingForm' ).addEventListener( 'submit', function ( event ) {
        event.preventDefault();
        createItemList();
    }, false );

});















