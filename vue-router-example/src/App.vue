<template>
  <div id="app">
    <nav class="nav">
      <router-link to="/first" tag="li"><a>first</a></router-link>
      <router-link to="/second" tag="li"><a>second</a></router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        //
      };
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
  .nav {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    justify-content: center;

    & a {
      text-transform: uppercase;
      font-size: 20px;
    }
  }
</style>
