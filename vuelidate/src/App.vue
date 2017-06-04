<template lang="pug">
  #app.container
    .row
      .col-md-10.col-md-offset-1
        app-primo
</template>

<script>
  import Primo from './components/primo'

  export default {
    name: 'app',
    components: {
      appPrimo: Primo
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
  }
</style>
