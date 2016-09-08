window.addEventListener( 'load', function () {

    var total = 158;

    var buttons = document.querySelector( '.buttons' );
    var circle = document.querySelector( '.pie' );
    var activeClass = 'is-active';

    var continents = {
        asia: 60,
        northAmerica: 5,
        southAmerica: 7,
        oceania: 1,
        africa: 15,
        europe: 12
    };

    function toPercent( value1, value2 ) {
        return ( value1 * value2 ) / 100;
    }

    function setPieChart ( param ) {
        var result = toPercent( continents[ param ], total ) + ' ' + total;
        circle.style.strokeDasharray = result;
    }

    function setActiveClass ( param ) {
        for ( var i = 0; i < buttons.children.length; i++ ) {
            buttons.children[i].classList.remove( activeClass );
        }
        param.classList.add( activeClass );
    }

    for ( item in continents ) {
        var el = document.createElement( 'button' );
        el.innerText = item;
        el.setAttribute( 'data-name', item );
        buttons.appendChild( el );
    }

    buttons.addEventListener( 'click', function ( event ) {
        if ( event.target !== event.currentTarget ) {
            setPieChart( event.target.getAttribute( 'data-name' ) );
            setActiveClass( event.target );
        }
        event.stopPropagation();
    }, false );

    setPieChart ( 'asia' );
    setActiveClass ( buttons.children[0] );

}, false );
