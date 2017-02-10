<template>
  <div class="row calc__row vehicle">
    <div class="col-md-6">
      <h3 class="calc__title">Категория ТС:</h3>
    </div>
    <div class="col-md-6">
      <div class="col-md-8">
        <select class="calc__list form-control" name="vehicle" id="vehicle" v-model="vehicleValue" @change="chgVehicleValue">
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
    { name: 'Не выбрано', value: 0 },
    { name: 'Легковые автомобили', value: 1 },
    { name: 'Легковые такси', value: 2 },
    { name: 'Маршрутные автобусы', value: 3 },
    { name: 'Автобусы до 16 пассажиров включительно', value: 4 },
    { name: 'Автобусы более 16 пассажиров', value: 5 },
    { name: 'Грузовые авто 16 тонн и менее', value: 6 },
    { name: 'Грузовые авто 16 тонн и более', value: 7 },
    { name: 'Тракторы и строительная техника', value: 8 },
    { name: 'Мотоциклы, мопеды, квадроциклы', value: 9 },
    { name: 'Троллейбусы', value: 10 },
    { name: 'Трамваи', value: 11 },
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
      chgVehicleValue() {
        eventBus.$emit('chgVehicleValue', this.vehicleValue);
      },
    },
  };
</script>
