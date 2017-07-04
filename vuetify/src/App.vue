<template lang='pug'>

  v-app
  
    app-grids
    app-alerts

      
</template>

<script>
  import grids from './components/grid.vue'
  import alerts from './components/alerts.vue'

  export default {
    components: {
      appGrids: grids,
      appAlerts: alerts
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
