$( document ).ready( function () {
    //
    $(function() {
      $( '.tabs .nav__item' ).on( 'click', function() {
        show_content( $( this ).index() );
      });

      show_content(0);

      function show_content( index ) {
        // MAKE THE CONTENT VISIBLE
        $( '.tabs .content.visible').removeClass( 'visible' );
        $( '.tabs .content:nth-of-type(' + ( index + 1 ) + ')' ).addClass( 'visible' );

        // SET THE TAB TO SELECTED
        $('.tabs .nav__item.selected').removeClass( 'selected' );
        $('.tabs .nav__item:nth-of-type(' + ( index + 1 ) + ')').addClass( 'selected' );
      }
    });
    //
});
