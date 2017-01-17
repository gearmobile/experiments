// File is attached
// Need to size it down for adwords, and also make a few variations.

var ad;
var banner_end = false;
var clicktag;
var btn_replay;
var rotating = false;
var main_tl = new TimelineMax();

pre_init = function () {
	var img = new Image();
	img.onload = function() {
		init();
	}
	img.src = 'crate.jpg';
};

init = function(){
	clicktag = document.getElementById( 'background_exit' );
	btn_replay = document.getElementById( 'btn_replay' );

	/* Animation */
	function intro_anim () {
		var intro_tl = new TimelineMax();
		intro_tl
			.set('#logo_wrapper',{scale:0,rotationY:360,x:-78,y:-54,perspective:400})
			.set('.orange',{scale:.6,transformOrigin:'50% 50% 0'})
			.set('.pink',{scale:.6,transformOrigin:'50% 50% 0'})
			.set('.brown',{scale:.6,transformOrigin:'50% 50% 0'})
			.set('.tan',{scale:.6,transformOrigin:'50% 50% 0'})
			// --------------------------------------------------------------
			.add('start','+=.1')
			.from('#tan_circles',.5,{scale:0,transformOrigin:'50% 50% 0',ease:Power4.easeOut},'start')
			.from('#brown_circles',.6,{scale:0,transformOrigin:'50% 50% 0',ease:Power4.easeOut},'start')
			.from('#pink_circles',.7,{scale:0,transformOrigin:'50% 50% 0',ease:Power4.easeOut},'start')
			.from('#orange_circles',.8,{scale:0,transformOrigin:'50% 50% 0',ease:Power4.easeOut},'start')
			.from('#txt_hello',.4,{autoAlpha:0,scale:.5,ease:Power1.easeOut},'start+=.1')
			.to('#tan_circles',3,{rotation:-20,ease:Power0.easeNone},'start')
			.to('#brown_circles',3,{rotation:-25,ease:Power0.easeNone},'start')
			.to('#pink_circles',3,{rotation:-30,ease:Power0.easeNone},'start')
			.to('#orange_circles',3,{rotation:-45,ease:Power0.easeNone},'start')
			.to('#tan_circles',.39,{scale:0,transformOrigin:'50% 50% 0',ease:Power1.easeIn},'start+=2')
			.to('#brown_circles',.36,{scale:0,transformOrigin:'50% 50% 0',ease:Power1.easeIn},'start+=2')
			.to('#pink_circles',.33,{scale:0,transformOrigin:'50% 50% 0',ease:Power1.easeIn},'start+=2')
			.to('#orange_circles',.3,{scale:0,transformOrigin:'50% 50% 0',ease:Power1.easeIn},'start+=2')
			.to('#logo_wrapper',1.3,{scale:1,rotationY:0,ease:Power4.easeOut,perspective:400},'start+=2.25')
			.to(['.orange'],.4,{scale:2,transformOrigin:'50% 50% 0'},'start+=2')
			.to('#txt_hello',.4,{autoAlpha:0,scale:0,ease:Power1.easeOut},'start+=2.15')
			.from('#txt_still_looking',.5,{autoAlpha:0,scale:.9,transformOrigin:'50% 20% 0',ease:Power1.easeOut},'start+=2.7')
			.set('.orange',{scale:.6,transformOrigin:'50% 50% 0'})
			.set(['#tan_circles','#brown_circles','#pink_circles','#orange_circles'],{y:35})
			.from('#logo_cover',.7,{autoAlpha:0,ease:Power2.easeOut},'start+=3.5')
			.to('#logo_wrapper',.7,{rotationY:360,scale:.3,y:-20,ease:Power2.easeOut,perspective:400},'start+=3.5')
			.to('#txt_still_looking',.4,{autoAlpha:0,scale:.9,transformOrigin:'50% 20% 0',ease:Power1.easeOut},'start+=3.5')
			.to('#tan_circles',.7,{scale:1,transformOrigin:'50% 50% 0',ease:Power4.easeOut},'start+=5.5')
			.to('#brown_circles',.8,{scale:1,transformOrigin:'50% 50% 0',ease:Power4.easeOut},'start+=5.5')
			.to('#pink_circles',.9,{scale:1,transformOrigin:'50% 50% 0',ease:Power4.easeOut},'start+=5.5')
			.to('#orange_circles',1,{scale:1,transformOrigin:'50% 50% 0',ease:Power4.easeOut},'start+=5.5')
			.to(['#tan_circles','#brown_circles','#pink_circles','#orange_circles'],1,{y:0,ease:Power4.easeOut},'start+=5.6')
			.to('#logo_wrapper',.15,{autoAlpha:0,y:-30,scale:1,ease:Power2.easeOut},'start+=5.5')
			.set('#logo_wrapper',{scale:.12,y:30,x:-154})
			.to('#tan_circles',10,{rotation:-90,ease:Power0.easeNone},'start+=5.5')
			.to('#brown_circles',10,{rotation:-120,ease:Power0.easeNone},'start+=5.5')
			.to('#pink_circles',10,{rotation:-140,ease:Power0.easeNone},'start+=5.5')
			.to('#orange_circles',10,{rotation:-160,ease:Power0.easeNone},'start+=5.5')
			.to(['.tan','.brown','.pink','.orange'],1,{scale:.4,ease:Power4.easeOut},'start+=6.5')
			.to(['.tan','.brown','.pink','.orange'],1,{scale:1,ease:Power4.easeOut},'start+=7.5')
			.to(['.tan','.brown','.pink','.orange'],1,{scale:.6,ease:Power4.easeOut},'start+=8.5')
			.to(['.tan','.brown','.pink','.orange'],1,{scale:.4,ease:Power4.easeOut},'start+=9.5')
			.to(['.tan','.brown','.pink','.orange'],1,{scale:.6,ease:Power4.easeOut},'start+=11.5')
			.staggerFrom('.great',.5,{autoAlpha:0,y:10,ease:Power2.easeOut},.2,'start+=3.75')
			.to('#txt_great_site',.4,{autoAlpha:0,y:-10,ease:Power4.easeOut},'start+=5.5')
			.staggerFrom('.we_have',.5,{autoAlpha:0,y:10,ease:Power2.easeOut},.2,'start+=5.6')
			.to('#txt_we_have',.4,{autoAlpha:0,ease:Power4.easeOut},'start+=6.6')
			.staggerFrom('.great_designers',.5,{autoAlpha:0,y:10,ease:Power2.easeOut},.2,'start+=6.8')
			.to('#txt_great_designers',.4,{autoAlpha:0,ease:Power4.easeOut},'start+=8.5')
			.staggerFrom('.expert',.5,{autoAlpha:0,y:10,ease:Power2.easeOut},.2,'start+=8.7')
			.to('#txt_expert',.4,{autoAlpha:0,ease:Power4.easeOut},'start+=10.5')
			.staggerFrom('.friendly',.5,{autoAlpha:0,y:10,ease:Power2.easeOut},.2,'start+=10.7')
			.to('#txt_friendly',.4,{autoAlpha:0,ease:Power4.easeOut},'start+=13.4')
			.to('#circles',.4,{autoAlpha:0,ease:Power4.easeOut},'start+=13.7')
			.to('#logo_wrapper',.1,{autoAlpha:1},'start+=13.4')
			.to('#logo_cover',.7,{autoAlpha:0,ease:Power2.easeOut},'start+=14')
			.to('#logo_wrapper',1.3,{scale:1,x:0,y:0,rotationY:0,ease:Power3.easeInOut,perspective:400},'start+=13.4')
			.from('#ef_line1',.5,{autoAlpha:0,y:10,ease:Power2.easeOut},'start+=14.4')
			.from('#ef_line2',.5,{autoAlpha:0,y:10,ease:Power2.easeOut},'start+=14.6')
			.from('#ef_line3',.5,{autoAlpha:0,y:10,ease:Power2.easeOut},'start+=14.8')
			.from('#cta',.5,{autoAlpha:0,y:10,ease:Power2.easeOut},'start+=15.5')
			.from('#ef_line4',.5,{autoAlpha:0,y:10,ease:Power2.easeOut},'start+=15.7')
			.from( btn_replay, .5, { autoAlpha: 0, ease: Power1.easeOut }) // turn off btn replay
			.addCallback( bannerDone );
		;
		return intro_tl;
	};

	function bannerDone() {
		banner_end = true;
	};

	function animate() {
		main_tl
			.addLabel('start')
			.to('#loading', .2, {opacity:0, ease:Power1.easeOut}, 'start')
			.add(intro_anim(),'start')
		;
		//main_tl.seek(12);
		//main_tl.timeScale(1.3);
	};

	/* MOUSE ACTIONS */
    function addlisteners () {
    	// ---------------------------------------------------------
	    clicktag.addEventListener( 'click', function () {
		    console.log( 'background exit click' );
	    });
	    // ---------------------------------------------------------
    	clicktag.addEventListener( 'mouseover', function() {
	    	if( banner_end ) {
            	TweenMax.to( '#cta', .4, { backgroundColor: '#000', ease: Power1.easeOut } );
            }
    	});
    	// ---------------------------------------------------------
        clicktag.addEventListener('mouseout', function() {
            if ( banner_end ) {
	            TweenMax.to( '#cta', .4, { backgroundColor: '#fff', ease: Power1.easeOut } );
           }
		});
		// ---------------------------------------------------------
		btn_replay.addEventListener( 'mouseover', function () {
	    	if ( !rotating ) {
		    	rotating = true;
		    	TweenMax.set( btn_replay, { rotation: 0 } );
            	TweenMax.to( btn_replay, .5, {
            		rotation: 360,
            		ease: Power1.easeOut,
            		onComplete: function () {
            			rotating = false;
            		}
            	});
            }
    	});
    	// ---------------------------------------------------------
    	btn_replay.addEventListener( 'click', function () {
	    	main_tl.restart();
    	});
    };

    animate();
    addlisteners();
}

//window.onload = pre_init();
window.onload = init();
