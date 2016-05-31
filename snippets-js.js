
// JQUERY ANIMATED NUMBER COUNTER FROM ZERO TO VALUE
// ------------------------------------------------------------------------

// HTML
<span class="Single">150</span>

// JQUERY

$('.Count').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 1000,
    easing: 'swing',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    }
  });
});


// SMOOTH SCROLL
// ------------------------------------------------------------------------

$('a[href*=#]:not([href=#])').click(function() {
if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 2000);
        return false;
    }
}
});


// BAR CHART ANIMATION
// ------------------------------------------------------------------------

$('.bar').width('0%');
$('.bar').waypoint(function() {
$('.bar').each(function() {
    var width = $(this).data("percentage");
    $(this).animate({
        width: width
    }, {
        duration: 2000,
        easing: 'easeOutExpo',
    });
});
}, {
offset: '85%'
});


// MATH.RANDOM EXAMPLES
// --------------------------------------------------------------------------

// Returns a random number between 0 (inclusive) and 1 (exclusive)
function getRandom() {
  return Math.random();
}

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Color random function javascript
// --------------------------------------------------------------------------
var color = 'rgb('+(Math.floor(Math.random()*256))+','+(Math.floor(Math.random()*256))+','+(Math.floor(Math.random()*256))+')';


// SMOOTH SCROLL
// --------------------------------------------------------------------------

$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 2000);
            return false;
        }
    }
});
