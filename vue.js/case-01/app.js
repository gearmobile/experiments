
// https://ru.vuejs.org/v2/guide/

let appUno = new Vue({
    el: '#app',
    data: {
        message: 'Hello from Vue'
    }
});

let appDuo = new Vue({
    el: '#appDuo',
    data: {
        message: 'Вот когда вы загрузили эту страницу: ' + new Date
    }
});

let appTre = new Vue({
    el: '#appTre',
    data: {
        view: true
    }
});

let appQuattro = new Vue({
    el: '#appQuattro',
    data: {
        list: [
            {
                text: 'Посадить дерево',
                title: 'Uno'
            },
            {
                text: 'Построить дом',
                title: 'Duo'
            },
            {
                text: 'Вырастить сына',
                title: 'Tre'
            }
        ]
    }
});