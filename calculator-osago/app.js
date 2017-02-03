// https://www.bonus-malus.ru/osago/kalkuljator.html
const app = new Vue({
  data: {
    owner: [
      { name: 'не выбрано', value: -1 },
      { name: 'физическое лицо', value: 1 },
      { name: 'юридическое лицо', value: 2 },
    ],
    condition_1: [
      { name: 'не выбрано', value: -1 },
      { name: 'стандартные', value: 0 },
      { name: 'транзит', value: 1 },
      { name: 'иностранец', value: 2 },
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
      { name: 'трактора', value: 'tr' },
    ],
    power: [
      { name: 'не выбрано', value: -1 },
      { name: 'до 50 л.с. включительно', value: 0 },
      { name: 'свыше 50 до 70 л.с. включительно', value: 1 },
      { name: 'свыше 70 до 100 л.с. включительно', value: 2 },
      { name: 'свыше 100 до 120 л.с. включительно', value: 3 },
      { name: 'свыше 120 до 150 л.с. включительно', value: 4 },
      { name: 'свыше 150 л.с.', value: 5 },
    ],
    trailer: [
      { name: 'не выбрано', value: -1 },
      { name: 'нет', value: 1 },
      { name: 'да', value: 2 },
    ],
    region: [
      { name: 'не выбрано', value: -1 },
      { name: 'Москва', value: 78 },
      { name: 'Московская область', value: 53 },
      { name: 'Санкт-Петербург', value: 79 },
      { name: 'Ленинградская область', value: 50 },
      { name: 'Адыгея', value: 1 },
      { name: 'Алтай (республика)', value: 2},
      { name: 'Алтайский край', value: 23 },
      { name: 'Амурская область', value: 32 },
      { name: 'Архангельская область', value: 33 },
      { name: 'Астраханская область', value: 34 },
      { name: 'Башкортостан', value: 3 },
      { name: 'Байконур', value: 86 },
      { name: 'Белгородская область', value: 36 },
      { name: 'Брянская область', value: 36 },
      { name: 'Бурятия', value: 4 },
      { name: 'Владимирская область', value: 37 },
      { name: 'Волгоградская область', value: 38 },
      { name: 'Вологодская область', value: 39 },
      { name: 'Воронежская область', value: 40 },
      { name: 'Дагестан', value: 5 },
      { name: 'Еврейская автономная область', value: 81 },
      { name: 'Ивановская область', value: 41 },
      { name: 'Иркутская область', value: 42 },
      { name: 'Забайкальский край', value: 24 },
      { name: 'Ингушетия', value: 6 },
      { name: 'Кабардино-Балкария', value: 7 },
      { name: 'Калининградская область', value: 43 },
      { name: 'Калмыкия', value: 8 },
      { name: 'Калужская область', value: 44 },
      { name: 'Камчатский край', value: 25 },
      { name: 'Кемеровская область', value: 45 },
      { name: 'Кировская область', value: 46 },
      { name: 'Костромская область', value: 47 },
      { name: 'Краснодарский край', value: 26 },
      { name: 'Красноярский край', value: 27 },
      { name: 'Карачаево-Черкесия', value: 9 },
      { name: 'Карелия', value: 10 },
      { name: 'Коми', value: 11 },
      { name: 'Крым', value: 12 },
      { name: 'Курганская область', value: 48 },
      { name: 'Курская область', value: 49 },
      { name: 'Липецкая область', value: 51 },
      { name: 'Магаданская область', value: 52 },
      { name: 'Марий Эл', value: 13 },
      { name: 'Мордовия', value: 14 },
      { name: 'Мурманская область', value: 54 },
      { name: 'Нижегородская область', value: 55 },
      { name: 'Ненецкий автономный округ', value: 82 },
      { name: 'Новгородская область', value: 56 },
      { name: 'Новосибирская область', value: 57 },
      { name: 'Омская область', value: 58 },
      { name: 'Оренбургская область', value: 59 },
      { name: 'Орловская область', value: 60 },
      { name: 'Пензенская область', value: 61 },
      { name: 'Пермский край', value: 28 },
      { name: 'Приморский край', value: 29 },
      { name: 'Псковская область', value: 62 },
      { name: 'Ростовская область', value: 63 },
      { name: 'Рязанская область', value: 64 },
      { name: 'Самарская область', value: 65 },
      { name: 'Саратовская область', value: 66 },
      { name: 'Саха (Якутия)', value: 15 },
      { name: 'Сахалинская область', value: 67 },
      { name: 'Свердловская область', value: 68 },
      { name: 'Северная Осетия–Алания', value: 16 },
      { name: 'Севастополь', value: 80 },
      { name: 'Смоленская область', value: 69 },
      { name: 'Ставропольский край', value: 30 },
      { name: 'Тамбовская область', value: 70 },
      { name: 'Татарстан', value: 17 },
      { name: 'Тверская область', value: 71 },
      { name: 'Томская область', value: 72 },
      { name: 'Тульская область', value: 73 },
      { name: 'Тюменская область', value: 74 },
      { name: 'Тыва', value: 18 },
      { name: 'Удмуртия', value: 19 },
      { name: 'Ульяновская область', value: 75 },
      { name: 'Хабаровский край', value: 31 },
      { name: 'Хакасия', value: 20 },
      { name: 'Ханты-Мансийск – Югра', value: 83 },
      { name: 'Челябинская область', value: 76 },
      { name: 'Чечня', value: 21 },
      { name: 'Чувашия', value: 22 },
      { name: 'Чукотский автономный округ', value: 84 },
      { name: 'Ямало-Ненецкий автономный округ', value: 85 },
      { name: 'Ярославская область', value: 77 },
    ],
    group2: [
      { name: 'не выбран', value: -1 },
      { name: 'Горно-Алтайск', value: '2-1' },
      { name: 'прочие города и населенные пункты', value: '2-2' },
    ],
    group3: [
      { name: 'не выбран', value: -1 },
      { name: 'Благовещенск, Октябрьский', value: '3-1' },
      { name: 'Ишимбай, Кумертау, Салават', value: '3-2' },
      { name: 'Стерлитамак, Туймазы', value: '3-3' },
      { name: 'Уфа', value: '3-4' },
      { name: 'прочие города и населенные пункты', value: '3-5' },
    ],
    group4: [
      { name: 'не выбран', value: -1 },
      { name: 'Улан-Удэ', value: '4-1' },
      { name: 'прочие города и населенные пункты', value: '4-2' },
    ],
    group5: [
      { name: 'не выбран', value: -1 },
      { name: 'Буйнакск, Дербент, Каспийск, Махачкала, Хасавюрт', value: '5-1' },
      { name: 'прочие города и населенные пункты', value: '5-2' },
    ],
    group6: [
      { name: 'не выбран', value: -1 },
      { name: 'Малгобек', value: '6-1' },
      { name: 'Назрань', value: '6-2' },
      { name: 'прочие города и населенные пункты', value: '6-3' },
    ],
    group7: [
      { name: 'не выбран', value: -1 },
      { name: 'Нальчик, Прохладный', value: '7-1' },
      { name: 'прочие города и населенные пункты', value: '7-2' },
    ],
    group8: [
      { name: 'не выбран', value: -1 },
      { name: 'Элиста', value: '8-1' },
      { name: 'прочие города и населенные пункты', value: '8-2' },
    ],
    group: [
      { name: 'не выбран', value: -1 },
      { name: '', value: '' },
      { name: 'прочие города и населенные пункты', value: '' },
    ],
    group: [
      { name: 'не выбран', value: -1 },
      { name: '', value: '' },
      { name: 'прочие города и населенные пункты', value: '' },
    ],
    group: [
      { name: 'не выбран', value: -1 },
      { name: '', value: '' },
      { name: 'прочие города и населенные пункты', value: '' },
    ],
    group: [
      { name: 'не выбран', value: -1 },
      { name: '', value: '' },
      { name: 'прочие города и населенные пункты', value: '' },
    ],
    group: [
      { name: 'не выбран', value: -1 },
      { name: '', value: '' },
      { name: 'прочие города и населенные пункты', value: '' },
    ],
    group: [
      { name: 'не выбран', value: -1 },
      { name: '', value: '' },
      { name: 'прочие города и населенные пункты', value: '' },
    ],
  },
});

app.$mount('#app');