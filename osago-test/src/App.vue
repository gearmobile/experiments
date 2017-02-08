<template>
  <div id="app">
    <form action="#">
      <div>
        <label for="first">show first</label>
        <input type="checkbox" v-model="checkOne">
      </div>
      <div>
        <label for="first">show second</label>
        <input type="checkbox" v-model="checkTwo">
      </div>
    </form>
    <first v-if="checkOne"></first>
    <second v-if="checkTwo"></second>
  </div>
</template>

<script>

import first from './components/first';
import second from './components/second';

export default {
  name: 'app',
  data() {
    return {
      checkOne: false,
      checkTwo: false,
    };
  },
  components: {
    first,
    second,
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
</style>
