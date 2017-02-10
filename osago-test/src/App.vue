<template>
  <div id="app">
    <div class="container calc__container">
      <h2 class="calc__caption">Калькулятор ОСАГО 2017</h2>
      <owner></owner>
      <condition></condition>
      <vehicle></vehicle>
      <!---->
      <personOne v-if="person1"></personOne>
      <personTwo v-if="person2"></personTwo>
      <personThree v-if="person3"></personThree>
      <personFour v-if="person4"></personFour>
      <personFive v-if="person5"></personFive>
      <personSix v-if="person6"></personSix>
      <!---->
      <enterpriseOne v-if="enterprise1"></enterpriseOne>
      <enterpriseTwo v-if="enterprise2"></enterpriseTwo>
      <enterpriseThree v-if="enterprise3"></enterpriseThree>
      <enterpriseFour v-if="enterprise4"></enterpriseFour>
      <enterpriseFive v-if="enterprise5"></enterpriseFive>
      <enterpriseSix v-if="enterprise6"></enterpriseSix>
      <!---->
      <progressBar></progressBar>
      <calculate></calculate>
      <totalSum></totalSum>
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
      ratio: {},
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
