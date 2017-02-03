// https://www.bonus-malus.ru/osago/kalkuljator.html
const app = new Vue({
  data: {
    owner: [
      { name: 'не выбрано', value: -1 },
      { name: 'физическое лицо', value: 1 },
      { name: 'юридическое лицо', value: 2 }
    ],
    condition_1: [
      { name: 'не выбрано', value: -1 },
      { name: 'стандартные', value: 0 },
      { name: 'транзит', value: 1 },
      { name: 'иностранец', value: 2 }
    ],
    condition_2: [
      { name: 'не выбрано', value: -1 },
      { name: 'стандартные', value: 0 },
      { name: 'транзит', value: 1 },
      { name: 'иностранец', value: 2 },
      { name: 'спецтехника', value: 3 },
    ],
    vehicle: [
      { name: 'не выбрано', value: -1 },
      { name: 'мотоциклы, мопеды, квадроциклы', value: 'a' },
      { name: 'легковой автомобиль', value: 'b' },
      { name: 'легковое такси', value: 'bt' },
      { name: 'грузовой автомобиль, max 16 тонн и менее', value: 'c' },
      { name: 'грузовой автомобиль, max 16 тонн и более', value: 'cm' },
      { name: 'автобусы до 16 пассажиров включительно', value: 'd' },
      { name: 'автобусы более 16 пассажиров', value: 'dm' },
      { name: 'маршрутные автобусы', value: 'dt' },
      { name: 'троллейбусы', value: 'tb' },
      { name: 'трамваи', value: 'tm' },
      { name: 'трактора', value: 'tr' }
    ],
    power: [
      { name: 'не выбрано', value: -1 },
      { name: 'до 50 л.с. включительно', value: 0 },
      { name: 'свыше 50 до 70 л.с. включительно', value: 1 },
      { name: 'свыше 70 до 100 л.с. включительно', value: 2 },
      { name: 'свыше 100 до 120 л.с. включительно', value: 3 },
      { name: 'свыше 120 до 150 л.с. включительно', value: 4 },
      { name: 'свыше 150 л.с.', value: 5 },
    ]
  }
});

app.$mount('#app');