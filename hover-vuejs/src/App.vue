<template lang="pug">
  #app.container
    .row
      .col-md-12
        app-primo
    .row
      .col-md-12
        app-secondo
</template>

<script>
  import Primo from './components/primo.vue'
  import Secondo from './components/secondo.vue'

  export default {
    name: 'app',
    components: {
      appPrimo: Primo,
      appSecondo: Secondo
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
  }
</style>
