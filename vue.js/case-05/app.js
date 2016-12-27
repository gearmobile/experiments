// https://ru.vuejs.org/v2/guide/
// https://vuejs.org/v2/guide/migration.html#Fragment-Instances-removed

// РЕГИСТРАЦИЯ ГЛОБАЛЬНОГО КОМПОНЕНТА
Vue.component( 'counter', {
    template: '<h1 class="title">Hello World</h1>'
});

// РЕГИСТРАЦИЯ ГЛОБАЛЬНОГО КОМПОНЕНТА
Vue.component( 'dropdown', {
    template: '<ul class="nav">' +
    '<li class="nav__item"><a class="nav__link" href="#">nav-1</a></li>' +
    '<li class="nav__item"><a class="nav__link" href="#">nav-2</a></li>' +
    '<li class="nav__item"><a class="nav__link" href="#">nav-3</a></li>' +
    '<li class="nav__item"><a class="nav__link" href="#">nav-4</a></li>' +
    '</ul>'
});

// РЕГИСТРАЦИЯ ГЛОБАЛЬНОГО КОМПОНЕНТА
Vue.component( 'headling', {
    template: '#counterTemplate'
});

var child = {
    template: '<div>Пользовательский компонент!</div>'
};

// ROOT INSTANCE
new Vue({
    el: '#app',
    data: {
        count: 0
    },
    methods: {
        fnClick: function () {
            this.count += 1;
        }
    },
    components: {
        // этот компонент будет доступен только внутри данного инстанса
        'child-component': child
    }
});