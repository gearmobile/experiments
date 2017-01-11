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
            // item & paragraphs --------------------
            var item = document.createElement( 'li' );
            item.setAttribute( 'class', 'item-list' );
            var itemAuthor = document.createElement( 'p' );
            itemAuthor.setAttribute( 'class', 'book-author' );
            var itemTitle = document.createElement( 'p' );
            itemTitle.setAttribute( 'class', 'book-title' );
            // buttons --------------------
            var buttonRemove = document.createElement( 'button' );
            var buttonEdit = document.createElement( 'button' );
            buttonEdit.setAttribute( 'class', 'button-edit pull-left btn btn-primary' );
            buttonRemove.setAttribute( 'class', 'button-remove pull-right btn btn-danger' );
            var buttonRemoveText = document.createTextNode( 'Remove' );
            var buttonEditText = document.createTextNode( 'Edit' );
            buttonRemove.appendChild( buttonRemoveText );
            buttonEdit.appendChild( buttonEditText );
            // get local data --------------------
            itemAuthor.innerHTML = localStorage.getItem( 'author' );
            itemTitle.innerHTML = localStorage.getItem( 'title' );
            // append to page --------------------
            item.appendChild( itemAuthor );
            item.appendChild( itemTitle );
            item.appendChild( buttonEdit );
            item.appendChild( buttonRemove );
            bookShelfList.appendChild( item );
        }
        //
        bookShelfButton.addEventListener( 'click', saveData, false );
        //
        bookShelfSecondary.addEventListener( 'click', function ( event ) {
            if ( event && event.target.classList.contains( 'button-remove' ) ) {
                var currentItem = event.target.parentNode;
                currentItem.parentNode.removeChild( currentItem );
            }
        }, false );
    }
    //

}, false);



















