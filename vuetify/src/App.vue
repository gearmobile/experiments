<template lang='pug'>

  v-app
  
    app-grid

      
</template>

<script>
  import grid from './components/grid.vue'

  export default {
    components: {
      appGrid: grid
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
