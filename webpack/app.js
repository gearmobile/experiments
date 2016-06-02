"use strict";

// подключает модуль some-module в модуль app
let someModule = require ('./some-module');

// вызывает исполнение модуля some-module в модуле app
someModule('home');

// экспорт модуля someModule в библиотеку lib под именем exportedModule
exports.exportedModule = someModule;