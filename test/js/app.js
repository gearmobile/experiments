window.addEventListener('DOMContentLoaded', function () {
    //
    if ( localStorage ) {
        var storedBookAuthor;
        var storedBookTitle;
        var bookShelfButton = document.querySelector( '#bookshelf__button' );
        var bookShelfList = document.querySelector( '#bookShelfList' );
        //
        function saveData() {
            //
            var bookAuthor = document.querySelector( '#bookshelfAuthor' );
            var bookTitle = document.querySelector( '#bookshelfTitle' );
            //
            localStorage.setItem( 'author', bookAuthor.value );
            localStorage.setItem( 'title', bookTitle.value );
            //
            storedBookAuthor = localStorage.getItem( 'author' );
            storedBookTitle = localStorage.getItem( 'title' );
            //
            var item = document.createElement( 'li' );
            var itemAuthor = document.createElement( 'p' );
            var itemTitle = document.createElement( 'p' );
            itemAuthor.innerHTML = localStorage.getItem( 'author' );
            itemTitle.innerHTML = localStorage.getItem( 'title' );
            item.appendChild( itemAuthor );
            item.appendChild( itemTitle );
            bookShelfList.appendChild( item );
        }
        //
        bookShelfButton.addEventListener( 'click', saveData, false );
    }
    //

}, false);