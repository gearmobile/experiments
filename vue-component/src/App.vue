<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <button @click="chgUserAgeUp">increment user age</button>
    <button @click="chgUserAgeDown">decrement user age</button>
    <!--<p @parentName="surname = $event"></p>-->
    <hello :userName="name" @parentName="surname = $event"></hello>
  </div>
</template>

<script>
import Hello from './components/Hello';

export default {
  name: 'app',
  data() {
    return {
      age: 29,
      name: 'john',
      surname: 'aaronson',
    };
  },
  components: {
    Hello,
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
