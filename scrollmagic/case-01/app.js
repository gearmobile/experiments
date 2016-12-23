window.addEventListener( 'load', function () {
    // --------------------------------------------------
    const blockParallax = document.querySelector( '.parallax' );
    const blockContent = document.querySelector( '.parallax__secondary' );
    // --------------------------------------------------
    const parallax = new ScrollMagic.Scene({
            triggerElement: blockParallax,
            triggerHook: 1,
            duration: '200%'
        }).setTween( TweenMax.from( blockContent, 1, { y: '-40%' } ) ).addTo( controller );
    // --------------------------------------------------
}, false);