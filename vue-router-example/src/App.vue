<template>
  <div id="app">
    <navigation-main></navigation-main>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderNav from './components/header.vue';

  export default {
    name: 'app',
    data () {
      return {
        //
      };
    },
    components: {
      navigationMain: HeaderNav,
    },
  };
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
