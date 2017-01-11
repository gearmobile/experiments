window.addEventListener('DOMContentLoaded', function () {

    //
    if ( localStorage ) {

        var bookShelfButton = document.querySelector( '#bookshelf__button' );
        var bookShelfList = document.querySelector( '#bookShelfList' );
        var bookShelfSecondary = document.querySelector( '#bookShelfSecondary' );
        //

        function saveData() {

            //
            var bookAuthor = document.querySelector( '#bookshelfAuthor' );
            var bookTitle = document.querySelector( '#bookshelfTitle' );

            //
            localStorage.setItem( 'author', bookAuthor.value );
            localStorage.setItem( 'title', bookTitle.value );

            // card --------------------
            var card = document.createElement( 'li' );
            card.setAttribute( 'class', 'card' );

            var cardTitle = document.createElement( 'h4' );
            cardTitle.setAttribute( 'class', 'card-title' );

            var cardSubtitle = document.createElement( 'h6' );
            cardSubtitle.setAttribute( 'class', 'card-subtitle' );

            // buttons --------------------
            var cardRemove = document.createElement( 'button' );
            var cardEdit = document.createElement( 'button' );
            cardEdit.setAttribute( 'class', 'card-edit pull-left btn btn-primary' );
            cardRemove.setAttribute( 'class', 'card-remove pull-right btn btn-danger' );

            var cardRemoveText = document.createTextNode( 'Remove' );
            var cardEditText = document.createTextNode( 'Edit' );
            cardRemove.appendChild( cardRemoveText );
            cardEdit.appendChild( cardEditText );

            // get local data --------------------
            cardTitle.innerHTML = localStorage.getItem( 'author' );
            cardSubtitle.innerHTML = localStorage.getItem( 'title' );

            // append to page --------------------
            card.appendChild( cardTitle );
            card.appendChild( cardSubtitle );
            card.appendChild( cardEdit );
            card.appendChild( cardRemove );
            bookShelfList.appendChild( card );
        }
        //
        bookShelfButton.addEventListener( 'click', saveData, false );
        //
        bookShelfSecondary.addEventListener( 'click', function ( event ) {
            if ( event && event.target.classList.contains( 'card-remove' ) ) {
                var currentItem = event.target.parentNode;
                currentItem.parentNode.removeChild( currentItem );
            }
        }, false );
    }
    //

}, false);



















