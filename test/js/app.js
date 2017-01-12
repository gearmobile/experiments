window.addEventListener( 'DOMContentLoaded', function () {

    if ( localStorage ) {

        var bookShelfSave = document.querySelector( '#bookshelf__save' );
        var bookShelfList = document.querySelector( '#bookShelfList' );
        var booksGallery = document.querySelector( '#bookShelfSecondary' );

        var inputs = document.querySelectorAll( '.form-control' );
        var form = document.querySelector( '#bookShelfForm' );
        var counter = 0;

        // function to save data -----------------
        function saveData() {
            var obj = {};
            inputs.forEach( function ( item ) {
                obj[ item.id ] = item.value;
            });
            localStorage.setItem( counter.toString(), JSON.stringify( obj ) );
            // generate card -------------------------------
            var card = document.createElement( 'li' );
            card.classList.add( 'card' );
            card.setAttribute( 'id', counter.toString() );
            bookShelfList.append( card );
            card.insertAdjacentHTML( 'beforeEnd', '<h4 class="card-title">' + document.querySelector( '#bookshelfAuthor' ).value + '</h4>');
            card.insertAdjacentHTML( 'beforeEnd', '<h6 class="card-subtitle">' + document.querySelector( '#bookshelfTitle' ).value + '</h6>');
            card.insertAdjacentHTML( 'beforeEnd', '<button class="card-edit pull-left btn btn-primary">edit</button>');
            card.insertAdjacentHTML( 'beforeEnd', '<button class="card-remove pull-right btn btn-danger">remove</button>');
            counter++;
        }

        // save data --------------
        bookShelfSave.addEventListener( 'click', function ( event ) {
            event.preventDefault();
            saveData();
        }, false );

        // remove card ------------------
        booksGallery.addEventListener( 'click', function ( event ) {
            if ( event && event.target.classList.contains( 'card-remove' ) ) {
                var currentItem = event.target.parentNode;
                currentItem.parentNode.removeChild( currentItem );
            }
        }, false);

        // load data ------------------
        booksGallery.addEventListener( 'click', function ( event ) {
            if ( event && event.target.classList.contains( 'card-edit' ) ) {
                var currentItem = event.target.parentNode;
                var currentObj = JSON.parse( localStorage.getItem( currentItem.getAttribute( 'id' ) ) );
                inputs.forEach( function ( item ) {
                    item.value = currentObj[ item.id ];
                });
            }
        }, false);
    }
});



















