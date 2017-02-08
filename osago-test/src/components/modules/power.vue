<template>
  <div class="row calc__row power">
    <div class="col-md-6">
      <h3 class="calc__title">Мощность двигателя ТС:</h3>
    </div>
    <div class="col-md-6">
      <div class="col-md-8">
        <select class="calc__list form-control" name="power" id="power" v-model="powerValue" @change="getPowerRatio">
          <option v-for="item in power" v-text="item.name" :value="item.value"></option>
        </select>
      </div>
      <div class="col-md-4">
        <button type="button" class="calc__change btn btn-default" v-show="powerValue" @click="changeSelectPower">изменить</button>
      </div>
    </div>
  </div>
</template>

<script>
  const powerData = [
    { name: 'Не выбрано', value: 0, ratio: 0 },
    { name: 'До 50 л.с. включительно', value: 1, ratio: 0.6 },
    { name: 'Свыше 50 до 70 л.с. включительно', value: 2, ratio: 0.9 },
    { name: 'Свыше 70 до 100 л.с. включительно', value: 3, ratio: 1 },
    { name: 'Свыше 100 до 120 л.с. включительно', value: 4, ratio: 1.2 },
    { name: 'Свыше 120 до 150 л.с. включительно', value: 5, ratio: 1.4 },
    { name: 'Свыше 150 л.с.', value: 6, ratio: 1.6 },
  ];
  export default {
    name: 'power',
    data() {
      return {
        power: powerData,
        powerValue: 0,
        KM: 0, // мощность двигателя
      };
    },
    methods: {
      changeSelectPower() {
        this.powerValue = 0;
        this.KM = 0;
      },
      getPowerRatio() {
        for (let i = 0; i < this.power.length; i += 1) {
          if (this.power[i].value === this.powerValue) {
            this.KM = this.power[i].ratio;
          }
        }
      },
    },
  };
</script>
