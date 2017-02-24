<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h2 class="page-header">Vue Routing</h2>
        <app-nav></app-nav>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import appNav from './components/pageNavigation.vue';

  export default {
    name: 'app',
    components: {
      appNav,
    },
  };
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
