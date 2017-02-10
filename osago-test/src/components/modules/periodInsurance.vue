<template>
  <div class="row calc__row insurance">
    <div class="col-md-6">
      <h3 class="calc__title">Срок страхования ТС:</h3>
    </div>
    <div class="col-md-6">
      <div class="col-md-8">
        <select class="calc__list form-control" name="periodInsurance" id="periodInsurance" v-model="periodInsuranceValue" @change="getPeriodInsRatio">
          <option v-for="item in periodInsurance" v-text="item.name" :value="item.value"></option>
        </select>
      </div>
      <div class="col-md-4">
        <button class="calc__change btn btn-default" v-show="periodInsuranceValue" @click="changeSelectInsurance">изменить</button>
      </div>
    </div>
  </div>
</template>

<script>
  import eventBus from '../../main';

  const periodInsuranceData = [
    { name: 'Не выбран', value: 0, ratio: 0 },
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
  export default {
    name: 'insurance',
    data() {
      return {
        periodInsurance: periodInsuranceData,
        periodInsuranceValue: 0,
        KP: 0, // период страхования
      };
    },
    methods: {
      changeSelectInsurance() {
        this.insuranceValue = 0;
        this.KP = 0;
      },
      getPeriodInsRatio() {
        for (let i = 0; i < this.periodInsurance.length; i += 1) {
          if (this.periodInsurance[i].value === this.periodInsuranceValue) {
            this.KP = this.periodInsurance[i].ratio;
          }
        }
        eventBus.$emit('fetchperiodInsuranceRatio', this.KP);
      },
    },
  };
</script>
