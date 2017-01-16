window.addEventListener( 'load', function () {
    //
    var text1 = document.getElementById( 'adText1' );
    var text2 = document.getElementById( 'adText2' );
    var text3 = document.getElementById( 'adText3' );
    var marker = document.getElementById( 'adMarker' );
    var shadow = document.getElementById( 'adShadow' );
    var duration = 1;
    var fnEasing1 = Power2.easeOut;
    var fnEasing2 = Bounce.easeOut;
    var tl = new TimelineMax();
    //
    tl
        .from( text2, duration, { y: -100, ease: fnEasing1 } )
        .to( text1, ( duration + 2 ), { y: 200, ease: fnEasing1 }, '-=.7' )
        .from( marker, duration, { y: -200, ease: fnEasing2 }, '-=2' )
        .from( shadow, duration, { opacity: 0, ease: fnEasing2 }, '-=2' )
        .from( text3, duration, { scale: .2, opacity: 0 }, '-=1' );
}, false );