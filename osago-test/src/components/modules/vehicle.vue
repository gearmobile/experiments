<template>
  <div class="row calc__row vehicle">
    <div class="col-md-6">
      <h3 class="calc__title">Категория ТС:</h3>
    </div>
    <div class="col-md-6">
      <div class="col-md-8">
        <select class="calc__list form-control" name="vehicle" id="vehicle" v-model="vehicleValue" @change="fetchVehicleValue">
          <option v-for="item in vehicle" v-text="item.name" :value="item.value"></option>
        </select>
      </div>
      <div class="col-md-4">
        <button type="button" class="calc__change btn btn-default" v-show="vehicleValue" @click="clearSelectVehicle">изменить</button>
      </div>
    </div>
  </div>
</template>

<script>
  import eventBus from '../../main';

  const vehicleData = [
    { name: 'Не выбрано', value: 0, minRatio: 0, maxRatio: 0 },
    // Транспортные средства категории 'A', 'М'
    { name: 'Мотоциклы, мопеды, квадроциклы', value: 9, minRatio: 867, maxRatio: 1579 },
    // Транспортные средства категории 'B', 'BE'
    { name: 'Легковые автомобили', value: 1, minRatio: 0, maxRatio: 0 },
    { name: 'Легковые такси', value: 2, minRatio: 5138, maxRatio: 6166 },
    // Транспортные средства категорий 'C' и 'CE'
    { name: 'Грузовые авто 16 тонн и менее', value: 6, minRatio: 3509, maxRatio: 4211 },
    { name: 'Грузовые авто 16 тонн и более', value: 7, minRatio: 5284, maxRatio: 6341 },
    // Транспортные средства категорий 'D' и 'DE'
    { name: 'Автобусы до 16 пассажиров включительно', value: 4, minRatio: 2808, maxRatio: 3370 },
    { name: 'Автобусы более 16 пассажиров', value: 5, minRatio: 3509, maxRatio: 4211 },
    { name: 'Маршрутные автобусы', value: 3, minRatio: 5138, maxRatio: 6166 },
    // Транспортные средства категории 'Tb'
    { name: 'Троллейбусы', value: 10, minRatio: 2808, maxRatio: 3370 },
    // Транспортные средства категории 'Tm'
    { name: 'Трамваи', value: 11, minRatio: 1751, maxRatio: 2101 },
    // Спецтехника
    { name: 'Тракторы и строительная техника', value: 8, minRatio: 1124, maxRatio: 1579 },
  ];
  export default {
    name: 'vehicle',
    data() {
      return {
        vehicle: vehicleData,
        vehicleValue: 0,
      };
    },
    methods: {
      clearSelectVehicle() {
        this.vehicleValue = 0;
        eventBus.$emit('clrStateThree', this.vehicleValue);
      },
      fetchVehicleValue() {
        eventBus.$emit('chgVehicleValue', this.vehicleValue);
      },
    },
  };
</script>
