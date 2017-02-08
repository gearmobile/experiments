<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <button @click="chgUserAgeUp">increment user age</button>
    <button @click="chgUserAgeDown">decrement user age</button>
    <hello :userName="name" :userAge="age"></hello>
    <child @chgParent="surname = $event"></child>
  </div>
</template>

<script>
import Hello from './components/Hello';
import Child from './components/Child';

export default {
  name: 'app',
  data() {
    return {
      age: 29,
      name: 'john',
      surname: 'loremdolor',
    };
  },
  components: {
    Hello,
    Child,
  },
  methods: {
    chgUserAgeUp() {
      this.age += 1;
    },
    chgUserAgeDown() {
      this.age -= 1;
    },
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
