<template lang='pug'>

  v-app
  
    grid
    alert
    breadcrumbs
    lists
    cards
    buttons
      
</template>

<script>
  import grid from './components/grid.vue'
  import alert from './components/alert.vue'
  import breadcrumbs from './components/breadcrumbs.vue'
  import lists from './components/lists.vue'
  import cards from './components/card.vue'
  import buttons from './components/button.vue'

  export default {
    data () {
      return {
        title: 'Vuetify.js'
      }
    },
    components: {
      grid,
      alert,
      breadcrumbs,
      lists,
      cards,
      buttons
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
