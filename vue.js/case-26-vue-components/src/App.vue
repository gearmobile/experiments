<template>
  <div id="app">
    <app-message></app-message>
    <app-form :inputCompProp="appData" @onValueChange="appData = $event"></app-form>
  </div>
</template>

<script>
  import Message from './components/Message.vue'
  import Form from './components/Input.vue'
  export default {
    name: 'app',
    components: {
        'app-message': Message,
        'app-form': Form
    },
    data () {
      return {
        appData: 'This is message from component App'
      }
    }
  }
</script>

<style>
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
