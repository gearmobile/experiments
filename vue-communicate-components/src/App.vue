<template>
  <div id="app">
    <uno></uno>
    <duo></duo>
  </div>
</template>

<script>
import Uno from './components/uno';
import Duo from './components/duo';

export default {
  name: 'app',
  // data() {
  //   return {
  //     stateOne: 0,
  //   };
  // },
  components: {
    Uno,
    Duo,
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
  section {
    width: 48%;
    height: 200px;
    float: left;
    margin: 1%;
  }
</style>
