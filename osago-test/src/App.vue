<template>
  <div id="app">
    <div class="container calc__container">
      <h2 class="calc__caption">Калькулятор ОСАГО 2017</h2>
      <owner></owner>
      <condition></condition>
      <vehicle></vehicle>
      <personOne></personOne>
      <progressBar></progressBar>
      <calculate></calculate>
      <totalSum></totalSum>
    </div>
  </div>
</template>

<script>

import owner from './components/modules/owner';
import condition from './components/modules/condition';
import vehicle from './components/modules/vehicle';
import personOne from './components/personOne';
import progressBar from './components/modules/progressBar';
import calculate from './components/modules/calculate';
import totalSum from './components/modules/totalSum';

export default {
  name: 'app',
  data() {
    return {
      // regionValue: 0,
    };
  },
  components: {
    owner,
    condition,
    vehicle,
    personOne,
    progressBar,
    calculate,
    totalSum,
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
