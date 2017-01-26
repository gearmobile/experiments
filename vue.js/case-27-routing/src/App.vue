<template>
  <div id="app" class="app">
    <h1 class="app__title">let's go somewhere!</h1>
    <!-- include router -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  html {
    font-size: 62.5%;
    height: 100%;
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,700');
  }
  body {
    height: 100%;
    margin: 0;
    font-family: 'Fira Sans', sans-serif;
  }
  #app {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .app__title {
    margin: 0;
    padding: 10px 0;
    text-transform: capitalize;
    background-color: cornflowerblue;
    color: whitesmoke;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
