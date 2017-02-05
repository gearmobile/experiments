// https://www.bonus-malus.ru/osago/kalkuljator.html
const app = new Vue({
  data: {
    owner: [
      { name: 'не выбрано', value: 0 },
      { name: 'физическое лицо', value: 1 },
      { name: 'юридическое лицо', value: 2 },
    ],
    conditionOne: [
      { name: 'не выбрано', value: 0 },
      { name: 'стандартные', value: 1 },
      { name: 'транзит', value: 2 },
      { name: 'иностранец', value: 3 },
    ],
    conditionTwo: [
      { name: 'не выбрано', value: 0 },
      { name: 'стандартные', value: 1 },
      { name: 'транзит', value: 2 },
      { name: 'иностранец', value: 3 },
      { name: 'спецтехника', value: 4 },
    ],
    vehicle: [
      { name: 'не выбрано', value: 0 },
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
      { name: 'не выбрано', value: 0 },
      { name: 'до 50 л.с. включительно', value: 1 },
      { name: 'свыше 50 до 70 л.с. включительно', value: 2 },
      { name: 'свыше 70 до 100 л.с. включительно', value: 3 },
      { name: 'свыше 100 до 120 л.с. включительно', value: 4 },
      { name: 'свыше 120 до 150 л.с. включительно', value: 5 },
      { name: 'свыше 150 л.с.', value: 6 },
    ],
    trailer: [
      { name: 'не выбрано', value: 0 },
      { name: 'нет', value: 1 },
      { name: 'да', value: 2 },
    ],
    region: [
      { name: 'не выбрано', value: 0 },
      { name: 'Москва', value: 78 },
      { name: 'Московская область', value: 53 },
      { name: 'Санкт-Петербург', value: 79 },
      { name: 'Ленинградская область', value: 50 },
      { name: 'Адыгея', value: 1 },
      { name: 'Алтай (республика)', value: 2 },
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
      { name: 'не выбран', value: 0 },
      { name: 'Горно-Алтайск', value: '2-1' },
      { name: 'прочие города и населенные пункты', value: '2-2' },
    ],
    group3: [
      { name: 'не выбран', value: 0 },
      { name: 'Благовещенск, Октябрьский', value: '3-1' },
      { name: 'Ишимбай, Кумертау, Салават', value: '3-2' },
      { name: 'Стерлитамак, Туймазы', value: '3-3' },
      { name: 'Уфа', value: '3-4' },
      { name: 'прочие города и населенные пункты', value: '3-5' },
    ],
    group4: [
      { name: 'не выбран', value: 0 },
      { name: 'Улан-Удэ', value: '4-1' },
      { name: 'прочие города и населенные пункты', value: '4-2' },
    ],
    group5: [
      { name: 'не выбран', value: 0 },
      { name: 'Буйнакск, Дербент, Каспийск, Махачкала, Хасавюрт', value: '5-1' },
      { name: 'прочие города и населенные пункты', value: '5-2' },
    ],
    group6: [
      { name: 'не выбран', value: 0 },
      { name: 'Малгобек', value: '6-1' },
      { name: 'Назрань', value: '6-2' },
      { name: 'прочие города и населенные пункты', value: '6-3' },
    ],
    group7: [
      { name: 'не выбран', value: 0 },
      { name: 'Нальчик, Прохладный', value: '7-1' },
      { name: 'прочие города и населенные пункты', value: '7-2' },
    ],
    group8: [
      { name: 'не выбран', value: 0 },
      { name: 'Элиста', value: '8-1' },
      { name: 'прочие города и населенные пункты', value: '8-2' },
    ],
    group9: [
      { name: 'не выбран', value: 0 },
      { name: 'Петрозаводск', value: '9-1' },
      { name: 'прочие города и населенные пункты', value: '9-2' },
    ],
    group10: [
      { name: 'не выбран', value: 0 },
      { name: 'Сыктывкар', value: '10-1' },
      { name: 'Ухта', value: '10-2' },
      { name: 'прочие города и населенные пункты', value: '' },
    ],
    group11: [
      { name: 'не выбран', value: 0 },
      { name: 'Симферополь', value: '11-1' },
      { name: 'прочие города и населенные пункты', value: '11-2' },
    ],
    group12: [
      { name: 'не выбран', value: 0 },
      { name: 'Волжск', value: '12-1' },
      { name: 'Йошкар-Ола', value: '12-2' },
      { name: 'прочие города и населенные пункты', value: '12-3' },
    ],
    group13: [
      { name: 'не выбран', value: 0 },
      { name: 'Рузаевка', value: '13-1' },
      { name: 'Саранск', value: '13-2' },
      { name: 'прочие города и населенные пункты', value: '13-3' },
    ],
    group14: [
      { name: 'не выбран', value: 0 },
      { name: 'Нерюнгри', value: '14-1' },
      { name: 'Якутск', value: '14-2' },
      { name: 'прочие города и населенные пункты', value: '14-3' },
    ],
    group15: [
      { name: 'не выбран', value: 0 },
      { name: 'Владикавказ', value: '15-1' },
      { name: 'прочие города и населенные пункты', value: '15-2' },
    ],
    group16: [
      { name: 'не выбран', value: 0 },
      { name: 'Альметьевск, Зеленодольск, Нижнекамск', value: '16-1' },
      { name: 'Бугульма, Лениногорск, Чистополь', value: '16-2' },
      { name: 'Елабуга', value: '16-3' },
      { name: 'Казань', value: '16-4' },
      { name: 'Набережные Челны', value: '16-5' },
      { name: 'прочие города и населенные пункты', value: '16-6' },
    ],
    group17: [
      { name: 'не выбран', value: 0 },
      { name: 'Кызыл', value: '17-1' },
      { name: 'прочие города и населенные пункты', value: '17-2' },
    ],
    group18: [
      { name: 'не выбран', value: 0 },
      { name: 'Воткинск', value: '18-1' },
      { name: 'Глазов, Сарапул', value: '18-2' },
      { name: 'Ижевск', value: '18-3' },
      { name: 'прочие города и населенные пункты', value: '18-4' },
    ],
    group19: [
      { name: 'не выбран', value: 0 },
      { name: 'Абакан, Саяногорск, Черногорск', value: '19-1' },
      { name: 'прочие города и населенные пункты', value: '19-2' },
    ],
    group20: [
      { name: 'не выбран', value: 0 },
      { name: 'Барнаул', value: '20-1' },
      { name: 'Бийск', value: '20-2' },
      { name: 'Заринск, Новоалтайск, Рубцовск', value: '20-3' },
      { name: 'прочие города и населенные пункты', value: '20-4' },
    ],
    group21: [
      { name: 'не выбран', value: 0 },
      { name: 'Канаш', value: '21-1' },
      { name: 'Новочебоксарск', value: '21-2' },
      { name: 'Чебоксары', value: '21-3' },
      { name: 'прочие города и населенные пункты', value: '21-4' },
    ],
    group22: [
      { name: 'не выбран', value: 0 },
      { name: 'Краснокаменск', value: '22-1' },
      { name: 'Чита', value: '22-2' },
      { name: 'прочие города и населенные пункты', value: '22-3' },
    ],
    group23: [
      { name: 'не выбран', value: 0 },
      { name: 'Петропавловск-Камчатский', value: '' },
      { name: 'прочие города и населенные пункты', value: '' },
    ],
    group24: [
      { name: 'не выбран', value: 0 },
      { name: 'Анапа, Геленджик', value: '24-1' },
      { name: 'Армавир, Сочи, Туапсе', value: '24-2' },
      { name: 'Белореченск, Ейск, Кропоткин, Крымск, Курганинск, Лабинск, Славянск-на-Кубани, Тимашевск, Тихорецк', value: '24-3' },
      { name: 'Краснодар, Новороссийск', value: '24-4' },
      { name: 'прочие города и населенные пункты', value: '24-5' },
    ],
    group25: [
      { name: 'не выбран', value: 0 },
      { name: 'Ачинск, Зеленогорск', value: '25-1' },
      { name: 'Железногорск, Норильск', value: '25-2' },
      { name: 'Канск, Лесосибирск, Минусинск, Назарово', value: '25-3' },
      { name: 'Красноярск', value: '25-4' },
      { name: 'прочие города и населенные пункты', value: '25-5' },
    ],
    group26: [
      { name: 'не выбран', value: 0 },
      { name: 'Березники, Краснокамск', value: '26-1' },
      { name: 'Лысьва, Чайковский', value: '26-2' },
      { name: 'Пермь', value: '26-3' },
      { name: 'Соликамск', value: '26-4' },
      { name: 'прочие города и населенные пункты', value: '26-5' },
    ],
    group27: [
      { name: 'не выбран', value: 0 },
      { name: 'Владивосток', value: '27-1' },
      { name: 'прочие города и населенные пункты', value: '27-2' },
    ],
    group28: [
      { name: 'не выбран', value: 0 },
      { name: 'Буденновск, Георгиевск, Ессентуки, Минеральные воды, Невинномысск, Пятигорск', value: '28-1' },
      { name: 'Кисловодск, Михайловск, Ставрополь', value: '28-2' },
      { name: 'прочие города и населенные пункты', value: '28-3' },
    ],
    group29: [
      { name: 'не выбран', value: 0 },
      { name: 'Амурск', value: '29-1' },
      { name: 'Комсомольск-на-Амуре', value: '29-2' },
      { name: 'Хабаровск', value: '29-3' },
      { name: 'прочие города и населенные пункты', value: '29-4' },
    ],
    group30: [
      { name: 'не выбран', value: 0 },
      { name: 'Белогорск, Свободный', value: '30-1' },
      { name: 'Благовещенск', value: '30-2' },
      { name: 'прочие города и населенные пункты', value: '30-3' },
    ],
    group31: [
      { name: 'не выбран', value: 0 },
      { name: 'Архангельск', value: '31-1' },
      { name: 'Котлас', value: '31-2' },
      { name: 'Северодвинск', value: '31-3' },
      { name: 'прочие города и населенные пункты', value: '31-4' },
    ],
    group32: [
      { name: 'не выбран', value: 0 },
      { name: 'Астрахань', value: '32-1' },
      { name: 'прочие города и населенные пункты', value: '32-2' },
    ],
    group33: [
      { name: 'не выбран', value: 0 },
      { name: 'Белгород', value: '33-1' },
      { name: 'Губкин, Старый Оскол', value: '33-2' },
      { name: 'прочие города и населенные пункты', value: '33-3' },
    ],
    group34: [
      { name: 'не выбран', value: 0 },
      { name: 'Брянск', value: '34-1' },
      { name: 'Клинцы', value: '34-2' },
      { name: 'прочие города и населенные пункты', value: '34-3' },
    ],
    group35: [
      { name: 'не выбран', value: 0 },
      { name: 'Владимир', value: '35-1' },
      { name: 'Гусь-Хрустальный', value: '35-2' },
      { name: 'Муром', value: '35-3' },
      { name: 'прочие города и населенные пункты', value: '35-4' },
    ],
    group36: [
      { name: 'не выбран', value: 0 },
      { name: 'Волгоград', value: '36-1' },
      { name: 'Волжский', value: '36-2' },
      { name: 'Камышин, Михайловка', value: '36-3' },
      { name: 'прочие города и населенные пункты', value: '36-4' },
    ],
    group37: [
      { name: 'не выбран', value: 0 },
      { name: 'Вологда', value: '37-1' },
      { name: 'Череповец', value: '37-2' },
      { name: 'прочие города и населенные пункты', value: '37-3' },
    ],
    group38: [
      { name: 'не выбран', value: 0 },
      { name: 'Борисоглебск, Лиски, Россошь', value: '38-1' },
      { name: 'Воронеж', value: '38-2' },
      { name: 'прочие города и населенные пункты', value: '38-3' },
    ],
    group39: [
      { name: 'не выбран', value: 0 },
      { name: 'Иваново', value: '39-1' },
      { name: 'Кинешма', value: '39-2' },
      { name: 'Шуя', value: '39-3' },
      { name: 'прочие города и населенные пункты', value: '39-4' },
    ],
    group40: [
      { name: 'не выбран', value: 0 },
      { name: 'Ангарск', value: '40-1' },
      { name: 'Братск, Тулун, Усть-Илимск, Усть-Кут, Черемхово', value: '40-2' },
      { name: 'Иркутск', value: '40-3' },
      { name: 'Усолье-Сибирское', value: '40-4' },
      { name: 'Шелехов', value: '40-5' },
      { name: 'прочие города и населенные пункты', value: '40-6' },
    ],
    group41: [
      { name: 'не выбран', value: 0 },
      { name: 'Калининград', value: '41-1' },
      { name: 'прочие города и населенные пункты', value: '41-2' },
    ],
    group42: [
      { name: 'не выбран', value: 0 },
      { name: 'Калуга', value: '42-1' },
      { name: 'Обнинск', value: '42-2' },
      { name: 'прочие города и населенные пункты', value: '42-3' },
    ],
    group43: [
      { name: 'не выбран', value: 0 },
      { name: 'Анжеро-Судженск, Киселевск, Юрга', value: '43-1' },
      { name: 'Белово, Березовский, Междуреченск, Осинники, Прокопьевск', value: '43-2' },
      { name: 'Кемерово', value: '43-3' },
      { name: 'Новокузнецк', value: '43-4' },
      { name: 'прочие города и населенные пункты', value: '43-5' },
    ],
    group44: [
      { name: 'не выбран', value: 0 },
      { name: 'Киров', value: '44-1' },
      { name: 'Кирово-Чепецк', value: '44-2' },
      { name: 'прочие города и населенные пункты', value: '44-3' },
    ],
    group45: [
      { name: 'не выбран', value: 0 },
      { name: 'Кострома', value: '45-1' },
      { name: 'прочие города и населенные пункты', value: '45-2' },
    ],
    group46: [
      { name: 'не выбран', value: 0 },
      { name: 'Курган', value: '46-1' },
      { name: 'Шадринск', value: '46-2' },
      { name: 'прочие города и населенные пункты', value: '46-3' },
    ],
    group47: [
      { name: 'не выбран', value: 0 },
      { name: 'Железногорск', value: '47-1' },
      { name: 'Курск', value: '47-2' },
      { name: 'прочие города и населенные пункты', value: '47-3' },
    ],
    group48: [
      { name: 'не выбран', value: 0 },
      { name: 'Елец', value: '48-1' },
      { name: 'Липецк', value: '48-2' },
      { name: 'прочие города и населенные пункты', value: '48-3' },
    ],
    group49: [
      { name: 'не выбран', value: 0 },
      { name: 'Магадан', value: '49-1' },
      { name: 'прочие города и населенные пункты', value: '49-2' },
    ],
    group50: [
      { name: 'не выбран', value: 0 },
      { name: 'Апатиты, Мончегорск', value: '50-1' },
      { name: 'Мурманск', value: '50-2' },
      { name: 'Североморск', value: '50-3' },
      { name: 'прочие города и населенные пункты', value: '50-4' },
    ],
    group51: [
      { name: 'не выбран', value: 0 },
      { name: 'Арзамас, Выкса, Саров', value: '51-1' },
      { name: 'Балахна, Бор, Дзержинск', value: '51-2' },
      { name: 'Кстово', value: '51-3' },
      { name: 'Нижний Новгород', value: '51-4' },
      { name: 'прочие города и населенные пункты', value: '51-5' },
    ],
    group52: [
      { name: 'не выбран', value: 0 },
      { name: 'Боровичи', value: '52-1' },
      { name: 'Великий Новгород', value: '52-2' },
      { name: 'прочие города и населенные пункты', value: '52-3' },
    ],
    group53: [
      { name: 'не выбран', value: 0 },
      { name: 'Бердск', value: '53-1' },
      { name: 'Искитим', value: '53-2' },
      { name: 'Куйбышев', value: '53-3' },
      { name: 'Новосибирск', value: '53-4' },
      { name: 'прочие города и населенные пункты', value: '53-5' },
    ],
    group54: [
      { name: 'не выбран', value: 0 },
      { name: 'Омск', value: '54-1' },
      { name: 'прочие города и населенные пункты', value: '54-2' },
    ],
    group55: [
      { name: 'не выбран', value: 0 },
      { name: 'Бугуруслан, Бузулук, Новотроицк', value: '55-1' },
      { name: 'Оренбург', value: '55-2' },
      { name: 'Орск', value: '55-3' },
      { name: 'прочие города и населенные пункты', value: '55-4' },
    ],
    group56: [
      { name: 'не выбран', value: 0 },
      { name: 'Ливны, Мценск', value: '56-1' },
      { name: 'Орел', value: '56-2' },
      { name: 'прочие города и населенные пункты', value: '56-3' },
    ],
    group57: [
      { name: 'не выбран', value: 0 },
      { name: 'Заречный', value: '57-1' },
      { name: 'Кузнецк', value: '57-2' },
      { name: 'Пенза', value: '57-3' },
      { name: 'прочие города и населенные пункты', value: '57-4' },
    ],
    group58: [
      { name: 'не выбран', value: 0 },
      { name: 'Великие Луки', value: '58-1' },
      { name: 'Псков', value: '58-2' },
      { name: 'прочие города и населенные пункты', value: '58-3' },
    ],
    group59: [
      { name: 'не выбран', value: 0 },
      { name: 'Азов', value: '59-1' },
      { name: 'Батайск', value: '59-2' },
      { name: 'Волгодонск, Гуково, Каменск-Шахтинский, Новочеркасск, Новошахтинск, Сальск, Таганрог', value: '59-3' },
      { name: 'Ростов-на-Дону', value: '59-4' },
      { name: 'Шахты', value: '59-5' },
      { name: 'прочие города и населенные пункты', value: '59-6' },
    ],
    group60: [
      { name: 'не выбран', value: 0 },
      { name: 'Рязань', value: '60-1' },
      { name: 'прочие города и населенные пункты', value: '60-2' },
    ],
    group61: [
      { name: 'не выбран', value: 0 },
      { name: 'Новокуйбышевск, Сызрань', value: '61-1' },
      { name: 'Самара', value: '61-2' },
      { name: 'Тольятти', value: '61-3' },
      { name: 'Чапаевск', value: '61-4' },
      { name: 'прочие города и населенные пункты', value: '61-5' },
    ],
    group62: [
      { name: 'не выбран', value: 0 },
      { name: 'Балаково, Балашов, Вольск', value: '62-1' },
      { name: 'Саратов', value: '62-2' },
      { name: 'Энгельс', value: '62-3' },
      { name: 'прочие города и населенные пункты', value: '62-4' },
    ],
    group63: [
      { name: 'не выбран', value: 0 },
      { name: 'Южно-Сахалинск', value: '63-1' },
      { name: 'прочие города и населенные пункты', value: '63-2' },
    ],
    group64: [
      { name: 'не выбран', value: 0 },
      { name: 'Асбест, Ревда', value: '64-1' },
      { name: 'Березовский, Верхняя Пышма, Новоуральск, Первоуральск', value: '64-2' },
      { name: 'Верхняя Салда, Полевской', value: '64-3' },
      { name: 'Екатеринбург', value: '64-4' },
      { name: 'прочие города и населенные пункты', value: '64-5' },
    ],
    group65: [
      { name: 'не выбран', value: 0 },
      { name: 'Вязьма, Рославль, Сафоново, Ярцево', value: '65-1' },
      { name: 'Смоленск', value: '65-2' },
      { name: 'прочие города и населенные пункты', value: '65-3' },
    ],
    group66: [
      { name: 'не выбран', value: 0 },
      { name: 'Мичуринск', value: '66-1' },
      { name: 'Тамбов', value: '66-2' },
      { name: 'прочие города и населенные пункты', value: '66-3' },
    ],
    group67: [
      { name: 'не выбран', value: 0 },
      { name: 'Вышний Волочек, Кимры, Ржев', value: '67-1' },
      { name: 'Тверь', value: '67-2' },
      { name: 'прочие города и населенные пункты', value: '67-3' },
    ],
    group68: [
      { name: 'не выбран', value: 0 },
      { name: 'Северск', value: '68-1' },
      { name: 'Томск', value: '68-2' },
      { name: 'прочие города и населенные пункты', value: '68-3' },
    ],
    group69: [
      { name: 'не выбран', value: 0 },
      { name: 'Алексин, Ефремов, Новомосковск', value: '69-1' },
      { name: 'Тула', value: '69-2' },
      { name: 'Узловая, Щекино', value: '69-3' },
      { name: 'прочие города и населенные пункты', value: '69-4' },
    ],
    group70: [
      { name: 'не выбран', value: 0 },
      { name: 'Тобольск', value: '70-1' },
      { name: 'Тюмень', value: '70-2' },
      { name: 'прочие города и населенные пункты', value: '70-3' },
    ],
    group71: [
      { name: 'не выбран', value: 0 },
      { name: 'Димитровград', value: '71-1' },
      { name: 'Ульяновск', value: '71-2' },
      { name: 'прочие города и населенные пункты', value: '71-2' },
    ],
    group72: [
      { name: 'не выбран', value: 0 },
      { name: 'Златоуст, Миасс', value: '72-1' },
      { name: 'Копейск', value: '72-2' },
      { name: 'Магнитогорск', value: '72-3' },
      { name: 'Сатка, Чебаркуль', value: '72-4' },
      { name: 'Челябинск', value: '72-5' },
      { name: 'прочие города и населенные пункты', value: '72-6' },
    ],
    group73: [
      { name: 'не выбран', value: 0 },
      { name: 'Ярославль', value: '73-1' },
      { name: 'прочие города и населенные пункты', value: '73-2' },
    ],
    group74: [
      { name: 'не выбран', value: 0 },
      { name: 'Биробиджан', value: '74-1' },
      { name: 'прочие города и населенные пункты', value: '74-2' },
    ],
    group75: [
      { name: 'не выбран', value: 0 },
      { name: 'Когалым', value: '75-1' },
      { name: 'Нефтеюганск, Нягань', value: '75-2' },
      { name: 'Сургут', value: '75-3' },
      { name: 'Нижневартовск', value: '75-4' },
      { name: 'Ханты-Мансийск', value: '75-5' },
      { name: 'прочие города и населенные пункты', value: '75-6' },
    ],
    group76: [
      { name: 'не выбран', value: 0 },
      { name: 'Новый Уренгой', value: '76-1' },
      { name: 'Ноябрьск', value: '76-2' },
      { name: 'прочие города и населенные пункты', value: '76-3' },
    ],
    insurance: [
      { name: 'не выбран', value: 0 },
      { name: '1 год', value: 10 },
      { name: '9 месяцев', value: 9 },
      { name: '8 месяцев', value: 8 },
      { name: '7 месяцев', value: 7 },
      { name: '6 месяцев', value: 6 },
      { name: '5 месяцев', value: 5 },
      { name: '4 месяца', value: 4 },
      { name: '3 месяца', value: 3 },
      { name: '2 месяца', value: 2 },
      { name: 'от 16 дней до 1 месяца', value: 1 },
      { name: 'от 5 до 15 дней', value: 0 },
    ],
    drivers: [
      { name: 'не выбран', value: 0 },
      { name: 'ограниченный список водителей', value: 1 },
      { name: 'без ограничения', value: 2 },
    ],
    experience: [
      { name: 'не выбран', value: 0 },
      { name: 'возраст больше 22 лет, стаж свыше 3 лет', value: 0 },
      { name: 'возраст больше 22 лет, стаж до 3 лет', value: 1 },
      { name: 'возраст до 22 лет, стаж свыше 3 лет', value: 2 },
      { name: 'возраст до 22 лет, стаж до 3 лет', value: 3 },
    ],
    classVehicle: [
      { name: 'не выбран', value: 0 },
      { name: 'не страховался ранее', value: 'def' },
      { name: 'М', value: 'm' },
      { name: '1', value: 1 },
      { name: '2', value: 2 },
      { name: '3', value: 3 },
      { name: '4', value: 4 },
      { name: '5', value: 5 },
      { name: '6', value: 6 },
      { name: '7', value: 7 },
      { name: '8', value: 8 },
      { name: '9', value: 9 },
      { name: '10', value: 10 },
      { name: '11', value: 11 },
      { name: '12', value: 12 },
      { name: '13', value: 13 },
    ],
    periodOne: [
        { name: 'не выбран', value: 0 },
        { name: '1 год', value: 10 },
        { name: '9 месяцев', value: 9 },
        { name: '8 месяцев', value: 8 },
        { name: '7 месяцев', value: 7 },
        { name: '6 месяцев', value: 6 },
        { name: '5 месяцев', value: 5 },
        { name: '4 месяца', value: 4 },
        { name: '3 месяца', value: 3 },
    ],
    periodTwo: [
      { name: 'не выбран', value: 0 },
      { name: '1 год', value: 10 },
      { name: '9 месяцев', value: 9 },
      { name: '8 месяцев', value: 8 },
      { name: '7 месяцев', value: 7 },
      { name: '6 месяцев', value: 6 },
    ],
    violations: [
      { name: 'не выбран', value: 0 },
      { name: 'нет', value: 1 },
      { name: 'да', value: 2 },
    ],
    // -----------------------
    ownerValue: 0,
    conditionOneValue: 0,
    conditionTwoValue: 0,
    vehicleValue: 0,
    powerValue: 0,
    trailerValue: 0,
    regionValue: 0,
    periodOneValue: 0,
    periodTwoValue: 0,
    insuranceValue: 0,
    driversValue: 0,
    experienceValue: 0,
    classVehicleValue: 0,
    violationsValue: 0
    // -----------------------
  },
  methods: {
    changeSelectOwner() {
      this.ownerValue = 0;
    },
    changeSelectVehicle() {
      this.vehicleValue = 0;
    },
    changeSelectPower() {
      this.powerValue = 0;
    },
    changeSelectTrailer() {
      this.trailerValue = 0;
    },
    changeSelectRegion() {
      this.regionValue = 0;
    },
    changeSelectPeriodOne() {
      this.periodOneValue = 0;
    },
    changeSelectPeriodTwo() {
      this.periodTwoValue = 0;
    },
    changeSelectInsurance() {
      this.insuranceValue = 0;
    },
    changeSelectDrivers() {
      this.driversValue = 0;
    },
    changeSelectExperience() {
      this.experienceValue = 0;
    },
    changeSelectClassVehicle() {
      this.classVehicleValue = 0;
    },
    changeSelectViolations() {
      this.violationsValue = 0;
    }
  },
  computed: {
    condOneShow: function () {
      return this.ownerValue === 1;
    },
    condTwoShow: function () {
      return this.ownerValue === 2;
    }
  }
});

app.$mount('#app');