<template>
  <div class="row calc__row city">
    <div class="col-md-6">
      <h3 class="calc__title">Уточните город регистрации ТС:</h3>
    </div>
    <div class="col-md-6">
      <div class="col-md-8">
        <select class="city-group form-control" name="city-group" id="city-group" v-model="cityValue" @change="getCityRatio">
          <option v-for="item in currCity" :value="item.value" v-text="item.name"></option>
        </select>
      </div>
      <div class="col-md-4">
        <button class="calc__change btn btn-default" v-show="cityValue" @click="changeSelectCity">изменить</button>
      </div>
    </div>
  </div>
</template>

<script>
  const cityData = [
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Барнаул', value: 1, ratio: 1.7 },
      { name: 'Бийск', value: 2, ratio: 1.2 },
      { name: 'Заринск, Новоалтайск, Рубцовск', value: 3, ratio: 1.1 },
      { name: 'Прочие города и населенные пункты', value: 4, ratio: 0.7 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Благовещенск', value: 1, ratio: 1.6 },
      { name: 'Белогорск, Свободный', value: 2, ratio: 1.1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 1 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Архангельск', value: 1, ratio: 1.8 },
      { name: 'Северодвинск', value: 2, ratio: 1.7 },
      { name: 'Котлас', value: 3, ratio: 1.6 },
      { name: 'Прочие города и населенные пункты', value: 4, ratio: 0.85 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Астрахань', value: 1, ratio: 1.4 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.8 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Белгород', value: 1, ratio: 1.3 },
      { name: 'Губкин, Старый Оскол', value: 2, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.8 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Брянск', value: 1, ratio: 1.5 },
      { name: 'Клинцы', value: 2, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.7 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Владимир', value: 1, ratio: 1.6 },
      { name: 'Муром', value: 2, ratio: 1.2 },
      { name: 'Гусь-Хрустальный', value: 3, ratio: 1.1 },
      { name: 'Прочие города и населенные пункты', value: 4, ratio: 1 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Волгоград', value: 1, ratio: 1.3 },
      { name: 'Волжский', value: 2, ratio: 1.1 },
      { name: 'Камышин, Михайловка', value: 3, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 4, ratio: 0.7 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Череповец', value: 1, ratio: 1.8 },
      { name: 'Вологда', value: 2, ratio: 1.7 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.9 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Воронеж', value: 1, ratio: 1.5 },
      { name: 'Борисоглебск, Лиски, Россошь', value: 2, ratio: 1.1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.8 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Биробиджан', value: 1, ratio: 0.6 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.6 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Чита', value: 1, ratio: 0.7 },
      { name: 'Краснокаменск', value: 2, ratio: 0.6 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.6 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Иваново', value: 1, ratio: 1.8 },
      { name: 'Кинешма', value: 2, ratio: 1.1 },
      { name: 'Шуя', value: 3, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 4, ratio: 0.9 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Иркутск', value: 1, ratio: 1.7 },
      { name: 'Шелехов', value: 2, ratio: 1.3 },
      { name: 'Ангарск', value: 3, ratio: 1.2 },
      { name: 'Усолье-Сибирское', value: 4, ratio: 1.1 },
      { name: 'Братск, Тулун, Усть-Илимск, Усть-Кут, Черемхово', value: 5, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 6, ratio: 0.8 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Нальчик, Прохладный', value: 1, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.7 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Калининград', value: 1, ratio: 1.1 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.8 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Обнинск', value: 1, ratio: 1.3 },
      { name: 'Калуга', value: 2, ratio: 1.2 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.9 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Петропавловск-Камчатский', value: 1, ratio: 1.3 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 1 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Прочие города и населенные пункты', value: 1, ratio: 1 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Кемерово', value: 1, ratio: 1.9 },
      { name: 'Новокузнецк', value: 2, ratio: 1.8 },
      { name: 'Белово, Березовский, Осинники, Прокопьевск, Междуреченск', value: 3, ratio: 1.3 },
      { name: 'Анжеро-Судженск, Киселевск, Юрга', value: 4, ratio: 1.2 },
      { name: 'Прочие города и населенные пункты', value: 5, ratio: 1.1 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Киров', value: 1, ratio: 1.4 },
      { name: 'Кирово-Чепецк', value: 2, ratio: 1.2 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.8 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Кострома', value: 1, ratio: 1.3 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.7 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Краснодар, Новороссийск', value: 1, ratio: 1.8 },
      { name: 'Анапа, Геленджик', value: 2, ratio: 1.3 },
      { name: 'Армавир, Сочи, Туапсе', value: 3, ratio: 1.2 },
      { name: 'Белореченск, Ейск, Кропоткин, Крымск, Курганинск, Лабинск, Славянск-на-Кубани, Тимашевск, Тихорецк', value: 4, ratio: 1.1 },
      { name: 'Прочие города и населенные пункты', value: 5, ratio: 1 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Красноярск', value: 1, ratio: 1.8 },
      { name: 'Железногорск, Норильск', value: 2, ratio: 1.3 },
      { name: 'Ачинск, Зеленогорск', value: 3, ratio: 1.1 },
      { name: 'Канск, Лесосибирск, Минусинск, Назарово', value: 4, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 5, ratio: 0.9 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Курган', value: 1, ratio: 1.4 },
      { name: 'Шадринск', value: 2, ratio: 1.1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.6 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Курск', value: 1, ratio: 1.2 },
      { name: 'Железногорск', value: 2, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.7 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Прочие города и населенные пункты', value: 1, ratio: 1.3 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Липецк', value: 1, ratio: 1.5 },
      { name: 'Елец', value: 2, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.8 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Магадан', value: 1, ratio: 0.7 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.6 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Прочие города и населенные пункты', value: 1, ratio: 1.7 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Москва', value: 1, ratio: 2 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Мурманск', value: 1, ratio: 2.1 },
      { name: 'Североморск', value: 2, ratio: 1.6 },
      { name: 'Апатиты, Мончегорск', value: 3, ratio: 1.3 },
      { name: 'Прочие города и населенные пункты', value: 4, ratio: 1.2 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Прочие города и населенные пункты', value: 1, ratio: 0.8 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Нижний Новгород', value: 1, ratio: 1.8 },
      { name: 'Балахна, Бор, Дзержинск', value: 2, ratio: 1.3 },
      { name: 'Кстово', value: 3, ratio: 1.2 },
      { name: 'Арзамас, Выкса, Саров', value: 4, ratio: 1.1 },
      { name: 'Прочие города и населенные пункты', value: 5, ratio: 1 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Великий Новгород', value: 1, ratio: 1.3 },
      { name: 'Боровичи', value: 2, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.9 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Новосибирск', value: 1, ratio: 1.7 },
      { name: 'Бердск', value: 2, ratio: 1.3 },
      { name: 'Искитим', value: 3, ratio: 1.2 },
      { name: 'Куйбышев', value: 4, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 5, ratio: 0.9 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Омск', value: 1, ratio: 1.6 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.9 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Оренбург', value: 1, ratio: 1.7 },
      { name: 'Орск', value: 2, ratio: 1.1 },
      { name: 'Бугуруслан, Бузулук, Новотроицк', value: 3, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 4, ratio: 0.8 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Орел', value: 1, ratio: 1.2 },
      { name: 'Ливны, Мценск', value: 2, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.7 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Пенза', value: 1, ratio: 1.4 },
      { name: 'Заречный', value: 2, ratio: 1.2 },
      { name: 'Кузнецк', value: 3, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 4, ratio: 0.7 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Пермь', value: 1, ratio: 2 },
      { name: 'Березники, Краснокамск', value: 2, ratio: 1.3 },
      { name: 'Соликамск', value: 3, ratio: 1.2 },
      { name: 'Лысьва, Чайковский', value: 4, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 5, ratio: 1.1 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Владивосток', value: 1, ratio: 1.4 },
      { name: 'Арсеньев, Артем, Находка, Спасск-Дальний, Уссурийск', value: 2, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.7 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Псков', value: 1, ratio: 1.2 },
      { name: 'Великие Луки', value: 2, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.7 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Прочие города и населенные пункты', value: 1, ratio: 1.3 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Горно-Алтайск', value: 1, ratio: 1.3 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.7 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Уфа', value: 1, ratio: 1.8 },
      { name: 'Стерлитамак, Туймазы', value: 2, ratio: 1.3 },
      { name: 'Благовещенск, Октябрьский', value: 3, ratio: 1.2 },
      { name: 'Ишимбай, Кумертау, Салават', value: 4, ratio: 1.1 },
      { name: 'Прочие города и населенные пункты', value: 5, ratio: 1 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Улан-Удэ', value: 1, ratio: 1.3 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.6 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Буйнакск, Дербент, Каспийск, Махачкала, Хасавюрт', value: 1, ratio: 0.7 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.6 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Малгобек', value: 1, ratio: 0.8 },
      { name: 'Назрань', value: 2, ratio: 0.6 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.6 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Йошкар-Ола', value: 1, ratio: 1.4 },
      { name: 'Элиста', value: 2, ratio: 1.3 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.6 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Петрозаводск', value: 1, ratio: 1.3 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.8 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Сыктывкар', value: 1, ratio: 1.6 },
      { name: 'Ухта', value: 2, ratio: 1.3 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 1 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Йошкар-Ола', value: 1, ratio: 1.3 },
      { name: 'Волжск', value: 2, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.7 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Саранск', value: 1, ratio: 1.5 },
      { name: 'Рузаевка', value: 2, ratio: 1.2 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.8 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Якутск', value: 1, ratio: 1.2 },
      { name: 'Нерюнгри', value: 2, ratio: 0.8 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.6 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Владикавказ', value: 1, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.8 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Казань', value: 1, ratio: 2 },
      { name: 'Набережные Челны', value: 2, ratio: 1.7 },
      { name: 'Альметьевск, Зеленодольск, Нижнекамск', value: 3, ratio: 1.3 },
      { name: 'Елабуга', value: 4, ratio: 1.2 },
      { name: 'Бугульма, Лениногорск, Чистополь', value: 5, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 6, ratio: 1.1 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Кызыл', value: 1, ratio: 0.6 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.6 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Абакан, Саяногорск, Черногорск', value: 1, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.6 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Ростов-на-Дону', value: 1, ratio: 1.8 },
      { name: 'Батайск', value: 2, ratio: 1.3 },
      { name: 'Азов', value: 3, ratio: 1.2 },
      { name: 'Шахты', value: 4, ratio: 1.1 },
      { name: 'Волгодонск, Гуково, Каменск-Шахтинский, Новочеркасск, Новошахтинск, Сальск, Таганрог', value: 5, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 6, ratio: 0.8 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Рязань', value: 1, ratio: 1.4 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.9 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Самара', value: 1, ratio: 1.6 },
      { name: 'Тольятти', value: 2, ratio: 1.5 },
      { name: 'Чапаевск', value: 3, ratio: 1.2 },
      { name: 'Новокуйбышевск, Сызрань', value: 4, ratio: 1.1 },
      { name: 'Прочие города и населенные пункты', value: 5, ratio: 0.9 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Санкт-Петербург', value: 1, ratio: 1.8 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Саратов', value: 1, ratio: 1.6 },
      { name: 'Энгельс', value: 2, ratio: 1.2 },
      { name: 'Балаково, Балашов, Вольск', value: 3, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 4, ratio: 0.7 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Южно-Сахалинск', value: 1, ratio: 1.5 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.9 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Екатеринбург', value: 1, ratio: 1.8 },
      { name: 'Березовский, Верхняя Пышма, Новоуральск, Первоуральск', value: 2, ratio: 1.3 },
      { name: 'Верхняя Салда, Полевской', value: 3, ratio: 1.2 },
      { name: 'Асбест, Ревда', value: 4, ratio: 1.1 },
      { name: 'Прочие города и населенные пункты', value: 5, ratio: 1 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Смоленск', value: 1, ratio: 1.2 },
      { name: 'Вязьма, Рославль, Сафоново, Ярцево', value: 2, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.7 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Кисловодск, Михайловск, Ставрополь', value: 1, ratio: 1.2 },
      { name: 'Буденновск, Георгиевск, Ессентуки, Минеральные воды, Невинномысск, Пятигорск', value: 2, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.7 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Тамбов', value: 1, ratio: 1.2 },
      { name: 'Мичуринск', value: 2, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.8 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Тверь', value: 1, ratio: 1.5 },
      { name: 'Вышний Волочек, Кимры, Ржев', value: 2, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.8 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Томск', value: 1, ratio: 1.6 },
      { name: 'Северск', value: 2, ratio: 1.2 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.9 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Тула', value: 1, ratio: 1.5 },
      { name: 'Узловая, Щекино', value: 2, ratio: 1.2 },
      { name: 'Алексин, Ефремов, Новомосковск', value: 3, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 4, ratio: 0.9 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Тюмень', value: 1, ratio: 2 },
      { name: 'Тобольск', value: 2, ratio: 1.3 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 1.1 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Ижевск', value: 1, ratio: 1.6 },
      { name: 'Воткинск', value: 2, ratio: 1.1 },
      { name: 'Глазов, Сарапул', value: 3, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 4, ratio: 0.8 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Ульяновск', value: 1, ratio: 1.5 },
      { name: 'Димитровград', value: 2, ratio: 1.2 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 0.9 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Хабаровск', value: 1, ratio: 1.7 },
      { name: 'Комсомольск-на-Амуре', value: 2, ratio: 1.3 },
      { name: 'Амурск', value: 3, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 4, ratio: 0.8 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Сургут', value: 1, ratio: 2 },
      { name: 'Нижневартовск', value: 2, ratio: 1.8 },
      { name: 'Ханты-Мансийск', value: 3, ratio: 1.5 },
      { name: 'Нефтеюганск, Нягань', value: 4, ratio: 1.3 },
      { name: 'Когалым', value: 5, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 6, ratio: 1.1 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Челябинск', value: 1, ratio: 2.1 },
      { name: 'Магнитогорск', value: 2, ratio: 1.8 },
      { name: 'Копейск', value: 3, ratio: 1.6 },
      { name: 'Златоуст, Миасс', value: 4, ratio: 1.4 },
      { name: 'Сатка, Чебаркуль', value: 5, ratio: 1.2 },
      { name: 'Прочие города и населенные пункты', value: 6, ratio: 1 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Прочие города и населенные пункты', value: 1, ratio: 0.6 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Чебоксары', value: 1, ratio: 1.7 },
      { name: 'Новочебоксарск', value: 2, ratio: 1.2 },
      { name: 'Канаш', value: 3, ratio: 1.1 },
      { name: 'Прочие города и населенные пункты', value: 4, ratio: 0.8 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Прочие города и населенные пункты', value: 1, ratio: 0.6 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Ноябрьск', value: 1, ratio: 1.7 },
      { name: 'Новый Уренгой', value: 2, ratio: 1 },
      { name: 'Прочие города и населенные пункты', value: 3, ratio: 1.1 },
    ],
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Ярославль', value: 1, ratio: 1.5 },
      { name: 'Прочие города и населенные пункты', value: 2, ratio: 0.9 },
    ],
    // -------------
    [
      { name: 'Не выбран', value: 0, ratio: 0 },
      { name: 'Прочие города и населенные пункты', value: 1, ratio: 0.6 },
    ],
    // -------------
  ];
  export default {
    name: 'city',
    data() {
      return {
        city: cityData,
        cityValue: 0,
        KT: 0, // территориальный коэффициент
      };
    },
    methods: {
      changeSelectCity() {
        this.cityValue = 0;
        this.КT = 0;
      },
      getCityRatio() {
        for (let i = 0; i < this.currCity.length; i += 1) {
          if (this.currCity[i].value === this.cityValue) {
            this.KT = this.currCity[i].ratio;
          }
        }
      },
    },
    computed: {
      currCity() {
        return this.city[this.regionValue];
      },
    },
  };
</script>
