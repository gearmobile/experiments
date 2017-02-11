<template>
  <div id="app">
    <div class="container calc__container">
      <h2 class="calc__caption">Калькулятор ОСАГО 2017</h2>
      <owner></owner>
      <condition></condition>
      <vehicle></vehicle>
      <template>
        <person-one v-show="person1"></person-one>
        <person-two v-show="person2"></person-two>
        <person-three v-show="person3"></person-three>
        <person-four v-show="person4"></person-four>
        <person-five v-show="person5"></person-five>
        <person-six v-show="person6"></person-six>
        <enterprise-one v-show="enterprise1"></enterprise-one>
        <enterprise-two v-show="enterprise2"></enterprise-two>
        <enterprise-three v-show="enterprise3"></enterprise-three>
        <enterprise-four v-show="enterprise4"></enterprise-four>
        <enterprise-five v-show="enterprise5"></enterprise-five>
        <enterprise-six v-show="enterprise6"></enterprise-dix>
      </template>
      <!--<progressBar></progressBar>-->
      <calculate :status="status"></calculate>
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
    status() {
      if (this.person1) {
        return 1;
      } else if (this.person2) {
        return 2;
      } else if (this.person3) {
        return 3;
      } else if (this.person4) {
        return 4;
      } else if (this.person5) {
        return 5;
      } else if (this.person6) {
        return 6;
      } else if (this.enterprise1) {
        return 7;
      } else if (this.enterprise2) {
        return 8;
      } else if (this.enterprise3) {
        return 9;
      } else if (this.enterprise4) {
        return 10;
      } else if (this.enterprise5) {
        return 11;
      } else if (this.enterprise6) {
        return 12;
      }
    },
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
    eventBus.$on('clrStateTwo', (data) => { this.state.stateTwo = data; });
    eventBus.$on('clrStateThree', (data) => { this.state.stateThree = data; });
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
