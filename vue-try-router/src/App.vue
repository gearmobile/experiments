<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h3 class="page-header">vue routing</h3>
          <app-nav></app-nav>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import appNav from './components/navigation.vue';

  export default {
    name: 'app',
    data () {
      return {
        // msg: 'Welcome to Your Vue.js App'
      };
    },
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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  section {
    padding: 20px 40px;
  }
</style>
