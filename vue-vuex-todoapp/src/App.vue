<template>
  <div id="app">
    <completedtodo></completedtodo>
    <gettodo></gettodo>
    <currenttodo></currenttodo>
  </div>
</template>

<script>
  import gettodo from './components/gettodo.vue'
  import currenttodo from './components/currenttodo.vue'
  import completedtodo from './components/completedtodo.vue'

  export default {
    name: 'app',
    components: {
      gettodo,
      currenttodo,
      completedtodo
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
