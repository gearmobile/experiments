<template lang='pug'>

  v-app
  
    app-grids
    app-alerts
    app-breadcrumbs
    app-buttons
    app-cards

      
</template>

<script>
  import grids from './components/grid.vue'
  import alerts from './components/alerts.vue'
  import breadcrumbs from './components/breadcrumbs.vue'
  import buttons from './components/buttons.vue'
  import cards from './components/cards.vue'

  export default {
    components: {
      appGrids: grids,
      appAlerts: alerts,
      appBreadcrumbs: breadcrumbs,
      appButtons: buttons,
      appCards: cards
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
