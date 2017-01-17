window.addEventListener( 'load', function () {
    // -------------------------------
    var text1 = document.getElementById( 'adText1' );
    var text2 = document.getElementById( 'adText2' );
    var text3 = document.getElementById( 'adText3' );
    var marker = document.getElementById( 'adMarker' );
    var shadow = document.getElementById( 'adShadow' );
    var icon = document.getElementById( 'adIcon' );
    var adBg = document.getElementById( 'adBg' );
    var adBlock = document.getElementById( 'adBlock' );
    var duration = 1;
    var fnEasing0 = Power0.easeOut;
    var fnEasing1 = Power2.easeOut;
    var fnEasing2 = Bounce.easeOut;
    var fnEasing3 = Back.easeOut;
    var tl = new TimelineMax();
    // --------------------------------
    function textColor() {
        const tlTextColor = new TimelineMax();
        tlTextColor
            .to( icon, ( duration + 1 ), { fill: '#b22222' } );
    }
    // --------------------------------
    function fnRotation() {
        const tlWelcome = new TimelineMax({ onComplete: textColor, transformOrigin: 'center center' });
        tlWelcome
            .to( icon, duration, {
                directionalRotation: '360_ccw',
                repeat: 1
            })
            .set( icon, { rotation: 20 } );
    }
    tl
        .to( adBlock, .6, { opacity: 1, delay: .8 } )
        .from( text2, duration, { y: -100, ease: fnEasing1 } )
        .to( text1, ( duration + 2 ), { y: 200, ease: fnEasing1 }, '-=.7' )
        .from( marker, duration, { y: -200, ease: fnEasing2 }, '-=2' )
        .from( shadow, duration, { autoAlpha: 0, ease: fnEasing2 }, '-=2' )
        .from( text3, duration, { scale: .2, opacity: 0 }, '-=1' )
        .to( icon, duration+.5, { left: 525, ease: fnEasing1, onComplete: fnRotation }, '-=.6' );
    // --------------------------------
    var tl2 = new TimelineMax({ repeat: -1 });
    tl2.to( adBg, duration + 64, { backgroundPositionX: 649, ease: fnEasing0 } );
}, false );