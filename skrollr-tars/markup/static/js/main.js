'use strict';

var random = require('lodash.random');
var forEach = require('lodash.foreach');
var skrollr = require('skrollr');

var items = document.querySelectorAll('.gallery__item');
forEach( items, function (el) {
    el.style.backgroundColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
});

var bgItems = document.querySelectorAll('.background__section');
forEach( bgItems, function (el) {
    el.style.backgroundColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
});

skrollr.init({ smoothScrolling: false, forceHeight: false, mobileDeceleration: 0.004 });
