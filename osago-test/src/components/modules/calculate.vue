<template>
  <div class="row calc__row calculate">
    <div class="col-md-6">
      <button type="button" class="btn btn-default">button</button>
    </div>
    <div class="col-md-6">
      <button type="button" class="btn btn-default calc__calculate" @click="getSum">calculate</button>
    </div>
  </div>
</template>

<script>
  import eventBus from '../../main';

  export default {
    name: 'calculate',
    data() {
      return {
        minValue: 0,
        maxValue: 0,
        // status: 0,
        ratio: {
          KBM: 0, // бонус малус
          KT: 0, // территориальный коэфициент
          KO: 0, // кол-во водителей
          KBC: 0, // стаж водителя
          KM: 0, // мощность двигателя
          TBMIN: 0, // минимальный базовый тариф
          TBMAX: 0, // максимальный базовый тариф
          КС: 0, // период эксплуатации
          KP: 0, // период страхования
          KH: 0, // нарушения
          KPR: 0, // наличие прицепа
        },
      };
    },
    props: {
      status: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      getSum() {
        // console.log(this.person1);
        // this.status = this.person1;
      },
    },
    created() {
      // fetch ratios
      eventBus.$on('fetchBonusMalusRatio', (data) => { this.ratio.KBM = data; });
      eventBus.$on('fetchCityRatio', (data) => { this.ratio.KT = data; });
      eventBus.$on('fetchDriverRatio', (data) => { this.ratio.KO = data; });
      eventBus.$on('fetchExperienceRatio', (data) => { this.ratio.KBC = data; });
      eventBus.$on('fetchOwnerRatio', (data) => { this.ratio.TB = data; });
      eventBus.$on('fetchPeriodExpRatio', (data) => { this.ratio.КС = data; });
      eventBus.$on('fetchperiodInsuranceRatio', (data) => { this.ratio.KP = data; });
      eventBus.$on('fetchPowerRatio', (data) => { this.ratio.KM = data; });
      eventBus.$on('fetchViolationRatio', (data) => { this.ratio.KH = data; });
      eventBus.$on('fetchTrailerRatio', (data) => { this.ratio.KPR = data; });
      eventBus.$on('fetchMinVehicleRatio', (data) => { this.ratio.TBMIN = data; });
      eventBus.$on('fetchMaxVehicleRatio', (data) => { this.ratio.TBMAX = data; });
      // ---
      // eventBus.$on('person1Up', (data) => { this.status; });
    },
  };
</script>
