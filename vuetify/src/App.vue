<template lang='pug'>

  v-app
  
    app-grids
    app-alerts
    app-breadcrumbs

      
</template>

<script>
  import grids from './components/grid.vue'
  import alerts from './components/alerts.vue'
  import breadcrumbs from './components/breadcrumbs.vue'

  export default {
    components: {
      appGrids: grids,
      appAlerts: alerts,
      appBreadcrumbs: breadcrumbs
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
