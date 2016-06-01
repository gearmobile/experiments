"use strict";

// подключает модуль welcome в модуль home
let welcome = require ('./welcome');

// вызывает исполнение модуля welcome в модуле home
welcome('home');

exports.welcome = welcome;