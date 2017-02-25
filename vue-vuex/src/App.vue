<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h2 class="page-header">Vuex</h2>
          <app-result></app-result>
          <app-counter></app-counter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import appCounter from './components/counter.vue';
  import appResult from './components/result.vue';

  export default {
    name: 'app',
    data() {
      return {
        //
      };
    },
    components: {
      appCounter,
      appResult
    }
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
