<template>
  <div class="row calc__row">
    <div class="col-md-6">
      <h3 class="calc__title">Место регистрации ТС:</h3>
    </div>
    <div class="col-md-6">
      <div class="col-md-8">
        <select class="calc__list form-control" name="region" id="region" v-model="regionValue">
          <option v-for="item in region" v-text="item.name" :value="item.value"></option>
        </select>
      </div>
      <div class="col-md-4">
        <button type="button" class="calc__change btn btn-default" v-show="regionValue" @click="changeSelectRegion">изменить</button>
      </div>
    </div>
  </div>
</template>

<script>
  const regionData = [
    { name: 'Не выбран', value: 0 },
    { name: 'Алтайский край', value: 1 },
    { name: 'Амурская область', value: 2 },
    { name: 'Архангельская область', value: 3 },
    { name: 'Астраханская область', value: 4 },
    { name: 'Белгородская область', value: 5 },
    { name: 'Брянская область', value: 6 },
    { name: 'Владимирская область', value: 7 },
    { name: 'Волгоградская область', value: 8 },
    { name: 'Вологодская область', value: 9 },
    { name: 'Воронежская область', value: 10 },
    { name: 'Еврейская автономная область', value: 11 },
    { name: 'Забайкальский край', value: 12 },
    { name: 'Ивановская область', value: 13 },
    { name: 'Иркутская область', value: 14 },
    { name: 'Кабардино-Балкарская Республика', value: 15 },
    { name: 'Калининградская область', value: 16 },
    { name: 'Калужская область', value: 17 },
    { name: 'Камчатский край', value: 18 },
    { name: 'Карачаево-Черкесская Республика', value: 19 },
    { name: 'Кемеровская область', value: 20 },
    { name: 'Кировская область', value: 21 },
    { name: 'Костромская область', value: 22 },
    { name: 'Краснодарский край', value: 23 },
    { name: 'Красноярский край', value: 24 },
    { name: 'Курганская область', value: 25 },
    { name: 'Курская область', value: 26 },
    { name: 'Ленинградская область', value: 27 },
    { name: 'Липецкая область', value: 28 },
    { name: 'Магаданская область', value: 29 },
    { name: 'Московская область', value: 30 },
    { name: 'Москва', value: 31 },
    { name: 'Мурманская область', value: 32 },
    { name: 'Ненецкий автономный округ', value: 33 },
    { name: 'Нижегородская область', value: 34 },
    { name: 'Новгородская область', value: 35 },
    { name: 'Новосибирская область', value: 36 },
    { name: 'Омская область', value: 37 },
    { name: 'Оренбургская область', value: 38 },
    { name: 'Орловская область', value: 39 },
    { name: 'Пензенская область', value: 40 },
    { name: 'Пермский край', value: 41 },
    { name: 'Приморский край', value: 42 },
    { name: 'Псковская область', value: 43 },
    { name: 'Республика Адыгея', value: 44 },
    { name: 'Республика Алтай', value: 45 },
    { name: 'Республика Башкортостан', value: 46 },
    { name: 'Республика Бурятия', value: 47 },
    { name: 'Республика Дагестан', value: 48 },
    { name: 'Республика Ингушетия', value: 49 },
    { name: 'Республика Калмыкия', value: 50 },
    { name: 'Республика Карелия', value: 51 },
    { name: 'Республика Коми', value: 52 },
    { name: 'Республика Марий Эл', value: 53 },
    { name: 'Республика Мордовия', value: 54 },
    { name: 'Республика Саха (Якутия)', value: 55 },
    { name: 'Республика Северная Осетия - Алания', value: 56 },
    { name: 'Республика Татарстан', value: 57 },
    { name: 'Республика Тыва', value: 58 },
    { name: 'Республика Хакасия', value: 59 },
    { name: 'Ростовская область', value: 60 },
    { name: 'Рязанская область', value: 61 },
    { name: 'Самарская область', value: 62 },
    { name: 'Санкт-Петербург', value: 63 },
    { name: 'Саратовская область', value: 64 },
    { name: 'Сахалинская область', value: 65 },
    { name: 'Свердловская область', value: 66 },
    { name: 'Смоленская область', value: 67 },
    { name: 'Ставропольский край', value: 68 },
    { name: 'Тамбовская область', value: 69 },
    { name: 'Тверская область', value: 70 },
    { name: 'Томская область', value: 71 },
    { name: 'Тульская область', value: 72 },
    { name: 'Тюменская область', value: 73 },
    { name: 'Удмуртская Республика', value: 74 },
    { name: 'Ульяновская область', value: 75 },
    { name: 'Хабаровский край', value: 76 },
    { name: 'Ханты-Мансийский автономный округ', value: 77 },
    { name: 'Челябинская область', value: 78 },
    { name: 'Чеченская Республика', value: 79 },
    { name: 'Чувашская Республика', value: 80 },
    { name: 'Чукотский автономный округ', value: 81 },
    { name: 'Ямало-Ненецкий автономный округ', value: 82 },
    { name: 'Ярославская область', value: 83 },
    { name: 'Байконур', value: 84 },
  ];
  export default {
    data() {
      return {
        region: regionData,
        regionValue: 0,
        KT: 0, // территориальный коэффициент
      };
    },
    methods: {
      changeSelectRegion() {
        this.regionValue = 0;
      },
    },
  };
</script>
