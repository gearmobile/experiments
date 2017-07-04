<template lang='pug'>

  v-app

    app-grids
    app-alerts
    app-breadcrumbs
    app-buttons
    app-icons
    app-steppers
    app-cards


</template>

<script>
  import grids from './components/grid.vue'
  import alerts from './components/alerts.vue'
  import breadcrumbs from './components/breadcrumbs.vue'
  import buttons from './components/buttons.vue'
  import icons from './components/icons.vue'
  import cards from './components/cards.vue'
  import steppers from './components/steppers.vue'

  export default {
    components: {
      appGrids: grids,
      appAlerts: alerts,
      appBreadcrumbs: breadcrumbs,
      appButtons: buttons,
      appCards: cards,
      appIcons: icons,
      appSteppers: steppers
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
