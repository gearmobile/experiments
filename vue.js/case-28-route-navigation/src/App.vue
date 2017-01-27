<template>
  <div id="app" class="app">
    <h1 class="app__title">let's go somewhere!</h1>
    <nav class="app__navigation">
      <router-link to="/">home</router-link>
      <router-link to="/users/11">users</router-link>
      <router-link to="/contacts">contacts</router-link>
      <router-link to="/post">{{ $route.params.id }}</router-link>
    </nav>
    <router-view></router-view>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eveniet ex quod repellat sequi soluta voluptate voluptatibus. Blanditiis dolorem, voluptas?</p>
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
    font-size: 1.6rem;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
  .app__title {
    margin: 0;
    padding: 10px 0;
    text-transform: capitalize;
    font-size: 20px;
    background-color: cornflowerblue;
    color: whitesmoke;
  }
  .app__navigation {
    padding: 10px 0;
  }
  .app__navigation a {
    text-transform: uppercase;
    text-decoration: none;
    margin: 0 20px;
  }
  .app__navigation a:hover,
  .app__navigation a:focus {
    text-decoration: underline;
    color: darkgreen;
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
