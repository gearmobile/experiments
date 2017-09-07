<template lang="pug">
  #app.grid
    .grid__col-12
      app-home
</template>

<script>
import Home from './components/Home'

export default {
  name: 'app',
  components: {
    appHome: Home
  }
}
</script>

<style lang="stylus">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
