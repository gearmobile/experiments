'use strict';

var random = require('lodash.random');
var forEach = require('lodash.foreach');
var skrollr = require('skrollr');

var items = document.querySelectorAll('.gallery__item');
forEach( items, function (el) {
    el.style.backgroundColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
});

var s = skrollr.init({ smoothScrolling: false, forceHeight: false, mobileDeceleration: 0.004 });
s.refresh(document.querySelector('.footer'));
