<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>{{ msg }}</h2>
          <h3>Built-in Directives</h3>
          <p v-text="'text literal'"></p>
          <p v-html="'<strong>this is a strong text</strong>'"></p>
        </div>
        <div class="col-md-12">
          <h3>Custom Directives</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
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
</style>
