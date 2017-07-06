<template lang='pug'>

  v-app

    app-grids
    app-alerts
    app-breadcrumbs
    app-buttons
    app-icons
    app-steppers
    app-cards
    app-transitions
    app-footer
    app-tabs
    app-dialogs
    app-pickers
    app-toolbars

</template>

<script>
  import grids from './components/grid.vue'
  import alerts from './components/alerts.vue'
  import breadcrumbs from './components/breadcrumbs.vue'
  import buttons from './components/buttons.vue'
  import icons from './components/icons.vue'
  import cards from './components/cards.vue'
  import steppers from './components/steppers.vue'
  import transitions from './components/transitions.vue'
  import appFooter from './components/footer.vue'
  import tabs from './components/tabs.vue'
  import dialogs from './components/dialogs.vue'
  import pickers from './components/pickers.vue'
  import toolbars from './components/toolbars.vue'

  export default {
    components: {
      appGrids: grids,
      appAlerts: alerts,
      appBreadcrumbs: breadcrumbs,
      appButtons: buttons,
      appCards: cards,
      appIcons: icons,
      appSteppers: steppers,
      appTransitions: transitions,
      appFooter,
      appTabs: tabs,
      appDialogs: dialogs,
      appPickers: pickers,
      appToolbars: toolbars
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
