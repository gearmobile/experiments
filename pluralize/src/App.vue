<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{ count }}</p>
    <!--<p>{{ pluralize(0, '% окон', '%d окно', '%d окна', '%d окон') }}</p>-->
    <p>{{ pluralize(0, 'нет штук', 'штука', 'штуки', 'штук') }}</p>
    <!--<p>{{ count | pluralize(count, 'окон', 'окно', 'окна', 'окон') }}</p>-->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 1
    }
  }
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
