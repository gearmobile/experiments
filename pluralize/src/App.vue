<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{ msg | capitalize }}</p>
    <p>{{ count + ' ' + getNoun(count, 'окно', 'окна', 'окон') }}</p>
  </div>
</template>

<script>
  import filters from './filters.js'
  import mixins from './mixins.js'

  export default {
    name: 'app',
    data () {
      return {
        msg: 'welcome to your vuejs app',
        count: 3
      }
    },
    filters,
    mixins: [mixins]
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
