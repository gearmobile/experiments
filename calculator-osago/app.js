// https://www.bonus-malus.ru/osago/kalkuljator.html
// https://www.vbr.ru/strahovanie/help/osago/formula-rascheta-osago/regionalnye-kojefficienty-strahovyh-tarifov/
// http://polisgid.ru/stati-osago/tarify-osago/
// http://www.4sure.ru/inform/aboutinsure/23-kojefficient-territorii
// http://avtoedet.ru/formula-rascheta-osago/

// -------------------------------------------
// МОЩНОСТЬ ДВИГАТЕЛЯ (КМ):
// -------------------------------------------
const powerData = [
  { name: 'не выбрано', value: 0, ratio: 0 },
  { name: 'до 50 л.с. включительно', value: 1, ratio: 0.6 },
  { name: 'свыше 50 до 70 л.с. включительно', value: 2, ratio: 0.9 },
  { name: 'свыше 70 до 100 л.с. включительно', value: 3, ratio: 1 },
  { name: 'свыше 100 до 120 л.с. включительно', value: 4, ratio: 1.2 },
  { name: 'свыше 120 до 150 л.с. включительно', value: 5, ratio: 1.4 },
  { name: 'свыше 150 л.с.', value: 6, ratio: 1.6 },
];

// -------------------------------------------
// БАЗОВАЯ ТАРИФНАЯ СТАВКА (ТБ):
// -------------------------------------------
const ownerData = [
  { name: 'не выбрано', value: 0, ratio: 0 },
  { name: 'физическое лицо', value: 1, ratio: 1200 },
  { name: 'юридическое лицо', value: 2, ratio: 2000 },
];

// -------------------------------------------
// НАЛИЧИЕ ПРИЦЕПА В ДОГОВОРЕ ОСАГО (КПР)
// -------------------------------------------
const trailerData = [
  { name: 'не выбрано', value: 0, ratio: 0 },
  { name: 'Прицепы к мотоциклам и мотороллерам', value: 1, ratio: 1.16 },
  { name: 'Прицепы к грузовым автомобилям с макс массой 16 тонн', value: 2, ratio: 1.4 },
  { name: 'Прицепы к грузовым автомобилям с макс массой более 16 тонн', value: 2, ratio: 1.25 },
  { name: 'Прицепы к тракторам, не имеющих колесных движителей', value: 3, ratio: 1.24 },
  { name: 'Прицепы к другим типам транспортных средств', value: 4, ratio: 1 },
];

const vehicleData = [
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
];

// -------------------------------------------
// МЕСТО ПРОЖИВАНИЯ СОБСТВЕННИКА:
// -------------------------------------------
const regionData = [
  { name: 'Алтайский край', value: 0 },
  { name: 'Амурская область', value: 1 },
  { name: 'Архангельская область', value: 2 },
  { name: 'Астраханская область', value: 3 },
  { name: 'Белгородская область', value: 4 },
  // -----------------------------------------
  { name: 'Брянская область', value: 5 },
  { name: 'Владимирская область', value: 6 },
  { name: 'Волгоградская область', value: 7 },
  // ------------------
  { name: 'Вологодская область', value: 8 },
  { name: 'Воронежская область', value: 9 },
  { name: 'Еврейская автономная область', value: 10 },
  // ------------------
  { name: 'Забайкальский край', value: 11 },
  { name: 'Ивановская область', value: 12 },
  { name: 'Иркутская область', value: 13 },
  // ------------------
  { name: 'Кабардино-Балкарская Республика', value: 14 },
  { name: 'Калининградская область', value: 15 },
  { name: 'Калужская область', value: 16 },
  // ------------------
  { name: 'Камчатский край', value: 17 },
  { name: 'Карачаево-Черкесская Республика', value: 18 },
  { name: 'Кемеровская область', value: 19 },
  // ------------------
  { name: 'Кировская область', value: 20 },
  { name: 'Костромская область', value: 21 },
  { name: 'Краснодарский край', value: 22 },
  // ------------------
  { name: 'Красноярский край', value: 23 },
  { name: 'Курганская область', value: 24 },
  { name: 'Курская область', value: 25 },
  // ------------------
  { name: 'Ленинградская область', value: 26 },
  { name: 'Липецкая область', value: 27 },
  { name: 'Магаданская область', value: 28 },
  // ------------------
  { name: 'Московская область', value: 29 },
  { name: 'Москва', value: 30 },
  { name: 'Мурманская область', value: 31 },
  // ------------------
  { name: 'Ненецкий автономный округ', value: 32 },
  { name: 'Нижегородская область', value: 33 },
  { name: 'Новгородская область', value: 34 },
  // ------------------
  { name: 'Новосибирская область', value: 35 },
  { name: 'Омская область', value: 36 },
  { name: 'Оренбургская область', value: 37 },
  // ------------------
  { name: 'Орловская область', value: 38 },
  { name: 'Пензенская область', value: 39 },
  { name: 'Пермский край', value: 40 },
  // ------------------
  { name: '', value: 41 },
  { name: '', value: 42 },
  { name: '', value: 43 },
  // ------------------
  { name: '', value: 44 },
  { name: '', value: 45 },
  { name: '', value: 46 },
  // ------------------
  { name: '', value: 47 },
  { name: '', value: 48 },
  { name: '', value: 49 },
  // ------------------
  { name: '', value: 50 },
  { name: '', value: 51 },
  { name: '', value: 52 },
  // ------------------
];

// -------------------------------------------
// МЕСТО РЕГИСТРАЦИИ СОБСТВЕННИКА (КТ):
// -------------------------------------------
const regionRegistrationData = [
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Барнаул', value: 1, ratio: 1.7 },
    { name: 'Бийск', value: 2, ratio: 1.2 },
    { name: 'Заринск, Новоалтайск, Рубцовск', value: 3, ratio: 1.1 },
    { name: 'прочие города и населенные пункты', value: 4, ratio: 0.7 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Благовещенск', value: 1, ratio: 1.6 },
    { name: 'Белогорск, Свободный', value: 2, ratio: 1.1 },
    { name: 'прочие города и населенные пункты', value: 3, ratio: 1 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Архангельск', value: 1, ratio: 1.8 },
    { name: 'Северодвинск', value: 2, ratio: 1.7 },
    { name: 'Котлас', value: 3, ratio: 1.6 },
    { name: 'прочие города и населенные пункты', value: 4, ratio: 0.85 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Астрахань', value: 1, ratio: 1.4 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 0.8 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Белгород', value: 1, ratio: 1.3 },
    { name: 'Губкин, Старый Оскол', value: 2, ratio: 1 },
    { name: 'прочие города и населенные пункты', value: 3, ratio: 0.8 },
  ],
  // -------------
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Брянск', value: 1, ratio: 1.5 },
    { name: 'Клинцы', value: 2, ratio: 1 },
    { name: 'прочие города и населенные пункты', value: 3, ratio: 0.7 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Владимир', value: 1, ratio: 1.6 },
    { name: 'Муром', value: 2, ratio: 1.2 },
    { name: 'Гусь-Хрустальный', value: 2, ratio: 1.1 },
    { name: 'прочие города и населенные пункты', value: 3, ratio: 1 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Волгоград', value: 1, ratio: 1.3 },
    { name: 'Волжский', value: 2, ratio: 1.1 },
    { name: 'Камышин, Михайловка', value: 2, ratio: 1 },
    { name: 'прочие города и населенные пункты', value: 3, ratio: 0.7 },
  ],
  // -------------
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Череповец', value: 1, ratio: 1.8 },
    { name: 'Вологда', value: 2, ratio: 1.7 },
    { name: 'прочие города и населенные пункты', value: 3, ratio: 0.9 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Воронеж', value: 1, ratio: 1.5 },
    { name: 'Борисоглебск, Лиски, Россошь', value: 2, ratio: 1.1 },
    { name: 'прочие города и населенные пункты', value: 3, ratio: 0.8 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Биробиджан', value: 1, ratio: 0.6 },
    { name: 'прочие города и населенные пункты', value: 3, ratio: 0.6 },
  ],
  // -------------
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Чита', value: 1, ratio: 0.7 },
    { name: 'Краснокаменск', value: 2, ratio: 0.6 },
    { name: 'прочие города и населенные пункты', value: 3, ratio: 0.6 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Иваново', value: 1, ratio: 1.8 },
    { name: 'Кинешма', value: 2, ratio: 1.1 },
    { name: 'Шуя', value: 2, ratio: 1 },
    { name: 'прочие города и населенные пункты', value: 3, ratio: 0.9 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Иркутск', value: 1, ratio: 1.7 },
    { name: 'Шелехов', value: 1, ratio: 1.3 },
    { name: 'Ангарск', value: 1, ratio: 1.2 },
    { name: 'Усолье-Сибирское', value: 1, ratio: 1.1 },
    { name: 'Братск, Тулун, Усть-Илимск, Усть-Кут, Черемхово', value: 1, ratio: 1 },
    { name: 'прочие города и населенные пункты', value: 3, ratio: 0.8 },
  ],
  // -------------
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Нальчик, Прохладный', value: 1, ratio: 1 },
    { name: 'прочие города и населенные пункты', value: 3, ratio: 0.7 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Калининград', value: 1, ratio: 1.1 },
    { name: 'прочие города и населенные пункты', value: 3, ratio: 0.8 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Обнинск', value: 1, ratio: 1.3 },
    { name: 'Калуга', value: 1, ratio: 1.2 },
    { name: 'прочие города и населенные пункты', value: 3, ratio: 0.9 },
  ],
  // -------------
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Петропавловск-Камчатский', value: 1, ratio: 1.3 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 1 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 1 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Кемерово', value: 1, ratio: 1.9 },
    { name: 'Новокузнецк', value: 2, ratio: 1.8 },
    { name: 'Белово, Березовский, Осинники, Прокопьевск, Междуреченск', value: 3, ratio: 1.3 },
    { name: 'Анжеро-Судженск, Киселевск, Юрга', value: 4, ratio: 1.2 },
    { name: 'прочие города и населенные пункты', value: 5, ratio: 1.1 },
  ],
  // -------------
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Киров', value: 1, ratio: 1.4 },
    { name: 'Кирово-Чепецк', value: 1, ratio: 1.2 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 0.8 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Кострома', value: 1, ratio: 1.3 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 0.7 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Краснодар, Новороссийск', value: 1, ratio: 1.8 },
    { name: 'Анапа, Геленджик', value: 2, ratio: 1.3 },
    { name: 'Армавир, Сочи, Туапсе', value: 3, ratio: 1.2 },
    { name: 'Белореченск, Ейск, Кропоткин, Крымск, Курганинск, Лабинск, Славянск-на-Кубани, Тимашевск, Тихорецк', value: 4, ratio: 1.1 },
    { name: 'прочие города и населенные пункты', value: 5, ratio: 1 },
  ],
  // -------------
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Красноярск', value: 1, ratio: 1.8 },
    { name: 'Железногорск, Норильск', value: 1, ratio: 1.3 },
    { name: 'Ачинск, Зеленогорск', value: 1, ratio: 1.1 },
    { name: 'Канск, Лесосибирск, Минусинск, Назарово', value: 1, ratio: 1 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 0.9 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Курган', value: 1, ratio: 1.4 },
    { name: 'Шадринск', value: 1, ratio: 1.1 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 0.6 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Курск', value: 1, ratio: 1.2 },
    { name: 'Железногорск', value: 2, ratio: 1 },
    { name: 'прочие города и населенные пункты', value: 5, ratio: 0.7 },
  ],
  // -------------
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 1.3 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Липецк', value: 1, ratio: 1.5 },
    { name: 'Елец', value: 1, ratio: 1 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 0.8 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Магадан', value: 1, ratio: 0.7 },
    { name: 'прочие города и населенные пункты', value: 5, ratio: 0.6 },
  ],
  // -------------
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 1.7 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Москва', value: 1, ratio: 2 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Мурманск', value: 1, ratio: 2.1 },
    { name: 'Североморск', value: 2, ratio: 1.6 },
    { name: 'Апатиты, Мончегорск', value: 3, ratio: 1.3 },
    { name: 'прочие города и населенные пункты', value: 5, ratio: 1.2 },
  ],
  // -------------
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 0.8 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Нижний Новгород', value: 1, ratio: 1.8 },
    { name: 'Балахна, Бор, Дзержинск', value: 1, ratio: 1.3 },
    { name: 'Кстово', value: 1, ratio: 1.2 },
    { name: 'Арзамас, Выкса, Саров', value: 1, ratio: 1.1 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 1 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Великий Новгород', value: 1, ratio: 1.3 },
    { name: 'Боровичи', value: 2, ratio: 1 },
    { name: 'прочие города и населенные пункты', value: 5, ratio: 0.9 },
  ],
  // -------------
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Новосибирск', value: 1, ratio: 1.7 },
    { name: 'Бердск', value: 1, ratio: 1.3 },
    { name: 'Искитим', value: 1, ratio: 1.2 },
    { name: 'Куйбышев', value: 1, ratio: 1 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 0.9 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Омск', value: 1, ratio: 1.6 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 0.9 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: 'Оренбург', value: 1, ratio: 1.7 },
    { name: 'Орск', value: 2, ratio: 1.1 },
    { name: 'Бугуруслан, Бузулук, Новотроицк', value: 3, ratio: 1 },
    { name: 'прочие города и населенные пункты', value: 5, ratio: 0.8 },
  ],
  // -------------
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: '', value: 1, ratio: 1.4 },
    { name: '', value: 1, ratio: 1.2 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 0.8 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: '', value: 1, ratio: 1.3 },
    { name: 'прочие города и населенные пункты', value: 2, ratio: 0.7 },
  ],
  [
    { name: 'не выбран', value: 0, ratio: 0 },
    { name: '', value: 1, ratio: 1.8 },
    { name: '', value: 2, ratio: 1.3 },
    { name: '', value: 3, ratio: 1.2 },
    { name: 'прочие города и населенные пункты', value: 5, ratio: 1 },
  ],
  // -------------
];

const conditionOneData = [
  { name: 'не выбрано', value: 0 },
  { name: 'стандартные', value: 1 },
  { name: 'транзит', value: 2 },
  { name: 'иностранец', value: 3 },
];

const conditionTwoData = [
  { name: 'не выбрано', value: 0 },
  { name: 'стандартные', value: 1 },
  { name: 'транзит', value: 2 },
  { name: 'иностранец', value: 3 },
  { name: 'спецтехника', value: 4 },
];

// -------------------------------------------
// КОЭФФИЦИЕНТ ОГРАНИЧЕНИЯ НА КОЛИЧЕСТВО ДОПУЩЕННЫХ ЛИЦ (КО):
// -------------------------------------------
const driversData = [
  { name: 'не выбран', value: 0, ratio: 0 },
  { name: 'ограниченное число водителей', value: 1, ratio: 1 },
  { name: 'число водителей без ограничения', value: 2, ratio: 1.8 },
];

// -------------------------------------------
// КОЭФФИЦИЕНТ ВОЗРАСТА И СТАЖА ВОДИТЕЛЯ (КВС):
// -------------------------------------------
const experienceData = [
  { name: 'не выбран', value: 0, ratio: 0 },
  { name: 'До 22 лет включительно со стажем вождения до 3 лет включительно', value: 1, ratio: 1.8 },
  { name: 'Более 22 лет со стажем вождения до 3 лет включительно', value: 2, ratio: 1.7 },
  { name: 'До 22 лет включительно со стажем вождения свыше 3 лет', value: 3, ratio: 1.6 },
  { name: 'Более 22 лет со стажем вождения свыше 3 лет', value: 4, ratio: 1 },
];

// -------------------------------------------
// КОЭФФИЦИЕНТ БОНУС-МАЛУС (КБМ):
// -------------------------------------------
const bonusMalusData = [
  { name: 'не выбран', value: 0, ratio: 0 },
  { name: 'М', value: 'M', ratio: 2.45 },
  { name: '0', value: 1, ratio: 2.3 },
  { name: '1', value: 2, ratio: 1.55 },
  { name: '2', value: 3, ratio: 1.4 },
  { name: '3', value: 4, ratio: 1 },
  { name: '4', value: 5, ratio: 0.95 },
  { name: '5', value: 6, ratio: 0.9 },
  { name: '6', value: 7, ratio: 0.85 },
  { name: '7', value: 8, ratio: 0.8 },
  { name: '8', value: 9, ratio: 0.75 },
  { name: '9', value: 10, ratio: 0.7 },
  { name: '10', value: 11, ratio: 0.65 },
  { name: '11', value: 12, ratio: 0.6 },
  { name: '12', value: 13, ratio: 0.55 },
  { name: '13', value: 14, ratio: 0.5 },
];

// -------------------------------------------
// КОЭФФИЦИЕНТ ПРАКТИЧЕСКОГО ИСПОЛЬЗОВАНИЯ ТС (КС):
// -------------------------------------------
const periodExploitationData = [
  { name: 'не выбран', value: 0, ratio: 0 },
  { name: '3 месяца', value: 1, ratio: 0.5 },
  { name: '4 месяца', value: 2, ratio: 0.6 },
  { name: '5 месяцев', value: 3, ratio: 0.65 },
  { name: '6 месяцев', value: 4, ratio: 0.7 },
  { name: '7 месяцев', value: 5, ratio: 0.8 },
  { name: '8 месяцев', value: 6, ratio: 0.9 },
  { name: '9 месяцев', value: 7, ratio: 0.95 },
  { name: '10 месяцев и более', value: 8, ratio: 1 },
];

// -------------------------------------------
// ПЕРИОД ДЕЙСТВИЯ СТРАХОВОГО ПОЛИСА (КП):
// -------------------------------------------
const periodInsuranceData = [
  { name: 'не выбран', value: 0, ratio: 0 },
  { name: 'от 5 до 15 дней', value: 1, ratio: 0.2 },
  { name: 'от 16 дней до 1 месяца', value: 2, ratio: 0.3 },
  { name: '2 месяца', value: 3, ratio: 0.4 },
  { name: '3 месяца', value: 4, ratio: 0.5 },
  { name: '4 месяца', value: 5, ratio: 0.6 },
  { name: '5 месяцев', value: 6, ratio: 0.65 },
  { name: '6 месяцев', value: 7, ratio: 0.7 },
  { name: '7 месяцев', value: 8, ratio: 0.8 },
  { name: '8 месяцев', value: 9, ratio: 0.9 },
  { name: '9 месяцев', value: 10, ratio: 0.95 },
  { name: '10 месяцев и более', value: 11, ratio: 1 },
];

// -------------------------------------------
// КОЭФФИЦИЕНТ НАРУШЕНИЙ КН
// -------------------------------------------
const violationsData = [
  { name: 'не выбран', value: 0, ratio: 0 },
  { name: 'нет', value: 1, ratio: 1.5 },
  { name: 'да', value: 2, ratio: 1.5 },
];

// =================================================================

const app = new Vue({
  data: {
    // datas
    // ----------------------------------
    owner: ownerData,
    conditionOne: conditionOneData,
    conditionTwo: conditionTwoData,
    vehicle: vehicleData,
    power: powerData,
    trailer: trailerData,
    region: regionData,
    regionRegistration: regionRegistrationData,
    drivers: driversData,
    experience: experienceData,
    bonusMalus: bonusMalusData,
    periodExploitation: periodExploitationData,
    periodInsurance: periodInsuranceData,
    violations: violationsData,
    // variables
    // -----------------------------------
    ownerValue: 0,
    conditionOneValue: 0,
    conditionTwoValue: 0,
    vehicleValue: 0,
    powerValue: 0,
    trailerValue: 0,
    regionValue: 0,
    currCity: 0,
    periodExploitationValue: 0,
    periodInsuranceValue: 0,
    driversValue: 0,
    experienceValue: 0,
    bonusMalusValue: 0,
    violationsValue: 0,
    // -----------------------
    // ВЫЧИСЛЯЕМЫЕ КОЭФИЦИЕНТЫ
    // -----------------------
    TB: 0, // базовый тариф
    KM: 0, // мощность двигателя
    КС: 0, // период эксплуатации
    KP: 0, // период страхования
    KPR: 0, // наличие прицепа
    KBC: 0, // стаж водителя
    KO: 0, // кол-во водителей
    KH: 0, // нарушения
    KBM: 0, // бонус-малус
    // -----------------------
  },
  methods: {
    changeSelectOwner() {
      this.ownerValue = 0;
      this.TB = 0;
    },
    changeSelectVehicle() {
      this.vehicleValue = 0;
    },
    changeSelectPower() {
      this.powerValue = 0;
      this.KM = 0;
    },
    changeSelectTrailer() {
      this.trailerValue = 0;
      this.KPR = 0;
    },
    changeSelectRegion() {
      this.regionValue = 0;
    },
    resetCurrCity() {
      this.currCity = 0;
    },
    changeSelectPeriod() {
      this.periodValue = 0;
      this.КС = 0;
    },
    changeSelectInsurance() {
      this.insuranceValue = 0;
      this.KP = 0;
    },
    changeSelectDrivers() {
      this.driversValue = 0;
      this.KO = 0;
    },
    changeSelectExperience() {
      this.experienceValue = 0;
      this.KBC = 0;
    },
    changeSelectBonusMalus() {
      this.bonusMalusValue = 0;
      this.KBM = 0;
    },
    changeSelectViolations() {
      this.violationsValue = 0;
      this.KH = 0;
    },

    // ----------------------------------------
    getOwnerRatio() { // checked
      for (let i = 0; i < this.owner.length; i += 1) {
        if (this.owner[i].value === this.ownerValue) {
          this.TB = this.owner[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getPowerRatio() { // checked
      for (let i = 0; i < this.power.length; i += 1) {
        if (this.power[i].value === this.powerValue) {
          this.KM = this.power[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getPeriodExpRatio() { // checked
      for (let i = 0; i < this.periodExploitation.length; i += 1) {
        if (this.periodExploitation[i].value === this.periodExploitationValue) {
          this.КС = this.periodExploitation[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getPeriodInsRatio() { // checked
      for (let i = 0; i < this.periodInsurance.length; i += 1) {
        if (this.periodInsurance[i].value === this.periodInsuranceValue) {
          this.KP = this.periodInsurance[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getTrailerRatio() { // checked
      for (let i = 0; i < this.trailer.length; i += 1) {
        if (this.trailer[i].value === this.trailerValue) {
          this.KPR = this.trailer[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getExperienceRatio() { // checked
      for (let i = 0; i < this.experience.length; i += 1) {
        if (this.experience[i].value === this.experienceValue) {
          this.KBC = this.experience[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getDriversRatio() { // checked
      for (let i = 0; i < this.drivers.length; i += 1) {
        if (this.drivers[i].value === this.driversValue) {
          this.KO = this.drivers[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getViolationsRatio() { // checked
      for (let i = 0; i < this.violations.length; i += 1) {
        if (this.violations[i].value === this.violationsValue) {
          this.KH = this.violations[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getBonusMalusRatio() { // checked
      for (let i = 0; i < this.bonusMalus.length; i += 1) {
        if (this.bonusMalus[i].value === this.bonusMalusValue) {
          this.KBM = this.bonusMalus[i].ratio;
        }
      }
    },
    // ----------------------------------------
  },
  computed: {
    condOneShow() {
      return this.ownerValue === 1;
    },
    condTwoShow() {
      return this.ownerValue === 2;
    },
    group1Show() {
      return this.regionValue === 1;
    },
    group2Show() {
      return this.regionValue === 2;
    },
    group3Show() {
      return this.regionValue === 3;
    },
    group4Show() {
      return this.regionValue === 4;
    },
    group5Show() {
      return this.regionValue === 5;
    },
    currGroup() {
      return this.regionRegistration[this.regionValue];
    },
  },
});

app.$mount('#app');
