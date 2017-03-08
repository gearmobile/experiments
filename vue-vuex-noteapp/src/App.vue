<template>
  <div id="app">
    <apptoolbar></apptoolbar>
    <!--<appnoteslist></appnoteslist>-->
    <!--<appeditor></appeditor>-->
  </div>
</template>

<script>
  // import appeditor from './components/editor.vue';
  import apptoolbar from './components/toolbar.vue';
  // import appnoteslist from './components/noteslist.vue';
  export default {
    name: 'app',
    components: {
      // appeditor,
      // appnoteslist,
      apptoolbar
    }
  }
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
