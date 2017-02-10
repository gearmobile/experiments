<template>
  <div id="app">
    <div class="container calc__container">
      <h2 class="calc__caption">Калькулятор ОСАГО 2017</h2>
      <owner></owner>
      <condition></condition>
      <vehicle></vehicle>
      <person-one v-if="person1"></person-one>
      <person-two v-if="person2"></person-two>
      <person-three v-if="person3"></person-three>
      <person-four v-if="person4"></person-four>
      <person-five v-if="person5"></person-five>
      <person-six v-if="person6"></person-six>
      <enterprise-one v-if="enterprise1"></enterprise-one>
      <enterprise-two v-if="enterprise2"></enterprise-two>
      <enterprise-three v-if="enterprise3"></enterprise-three>
      <enterprise-four v-if="enterprise4"></enterprise-four>
      <enterprise-five v-if="enterprise5"></enterprise-five>
      <enterprise-six v-if="enterprise6"></enterprise-dix>
      <progress-bar></progress-bar>
      <calculate></calculate>
      <total-sum></total-sum>
    </div>
  </div>
</template>

<script>
import eventBus from './main';

import owner from './components/modules/owner';
import condition from './components/modules/condition';
import vehicle from './components/modules/vehicle';
// ----------------------------
import personOne from './components/personOne';
import personTwo from './components/personTwo';
import personThree from './components/personThree';
import personFour from './components/personFour';
import personFive from './components/personFive';
import personSix from './components/personSix';
// ----------------------------
import enterpriseOne from './components/enterpriseOne';
import enterpriseTwo from './components/enterpriseTwo';
import enterpriseThree from './components/enterpriseThree';
import enterpriseFour from './components/enterpriseFour';
import enterpriseFive from './components/enterpriseFive';
import enterpriseSix from './components/enterpriseSix';
// ----------------------------
import progressBar from './components/modules/progressBar';
import calculate from './components/modules/calculate';
import totalSum from './components/modules/totalSum';

export default {
  name: 'app',
  data() {
    return {
      state: {
        stateOne: 0,
        stateTwo: 0,
        stateThree: 0,
      },
      ratio: {
        KBM: 0,
        KT: 0,
        KO: 0,
        KBC: 0,
        TB: 0,
        КС: 0,
        KP: 0,
        KH: 0,
        KPR: 0,
      },
    };
  },
  components: {
    owner,
    condition,
    vehicle,
    // ---------------
    personOne,
    personTwo,
    personThree,
    personFour,
    personFive,
    personSix,
    // ---------------
    enterpriseOne,
    enterpriseTwo,
    enterpriseThree,
    enterpriseFour,
    enterpriseFive,
    enterpriseSix,
    // ---------------
    progressBar,
    calculate,
    totalSum,
  },
  computed: {
    person1() {
      return this.state.stateOne === 1 && this.state.stateTwo === 1 && this.state.stateThree === 1;
    },
    person2() {
      return this.state.stateOne === 1 && this.state.stateTwo === 1 && this.state.stateThree === 2;
    },
    person3() {
      return this.state.stateOne === 1 && this.state.stateTwo === 2 && this.state.stateThree === 1;
    },
    person4() {
      return this.state.stateOne === 1 && this.state.stateTwo === 2 && this.state.stateThree === 2;
    },
    person5() {
      return this.state.stateOne === 1 && this.state.stateTwo === 3 && this.state.stateThree === 1;
    },
    person6() {
      return this.state.stateOne === 1 && this.state.stateTwo === 3 && this.state.stateThree === 2;
    },
    // ---------------------------
    enterprise1() {
      return this.state.stateOne === 2 && this.state.stateTwo === 1 && this.state.stateThree === 1;
    },
    enterprise2() {
      return this.state.stateOne === 2 && this.state.stateTwo === 1 && this.state.stateThree === 2;
    },
    enterprise3() {
      return this.state.stateOne === 2 && this.state.stateTwo === 2 && this.state.stateThree === 1;
    },
    enterprise4() {
      return this.state.stateOne === 2 && this.state.stateTwo === 2 && this.state.stateThree === 2;
    },
    enterprise5() {
      return this.state.stateOne === 2 && this.state.stateTwo === 3 && this.state.stateThree === 1;
    },
    enterprise6() {
      return this.state.stateOne === 2 && this.state.stateTwo === 3 && this.state.stateThree === 2;
    },
  },
  created() {
    eventBus.$on('chgOwnerValue', (data) => {
      this.state.stateOne = data;
    });
    eventBus.$on('chgConditionValue', (data) => {
      this.state.stateTwo = data;
    });
    eventBus.$on('chgVehicleValue', (data) => {
      if (data > 0 && data <= 2) {
        this.state.stateThree = 1;
      } else if (data > 2) {
        this.state.stateThree = 2;
      } else {
        this.state.stateThree = 0;
      }
    });
    eventBus.$on('clrStateOne', (data) => {
      this.statestateOne = data;
    });
    eventBus.$on('clrStateTwo', (data) => {
      this.state.stateTwo = data;
    });
    eventBus.$on('clrStateThree', (data) => {
      this.state.stateThree = data;
    });
    // fetch ratios
    eventBus.$on('fetchBonusMalusRatio', this.ratio.KB);
    eventBus.$on('fetchCityRatio', this.ratio.KT);
    eventBus.$on('fetchDriverRatio', this.ratio.KO);
    eventBus.$on('fetchExperienceRatio', this.ratio.KBC);
    eventBus.$on('fetchOwnerRatio', this.ratio.TB);
    eventBus.$on('fetchPeriodExpRatio', this.ratio.КС);
    eventBus.$on('fetchperiodInsuranceRatio', this.ratio.KP);
    eventBus.$on('fetchPowerRatio', this.ratio.KM);
    eventBus.$on('fetchViolationRatio', this.ratio.KH);
    eventBus.$on('fetchTrailerRatio', this.ratio.KPR);
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .calc__caption {
    margin: 0 0 60px;
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    color: darkslategrey;
  }

  .calc__container {
    padding-top: 20px;
  }

  .calc__row {
    margin-bottom: 60px;
  }

  .calc__title {
    margin: 0 0 20px;
    font-size: 20px;
    color: forestgreen;
  }
</style>
