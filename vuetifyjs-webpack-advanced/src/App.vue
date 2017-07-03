<template lang='pug'>

  v-app
  
    grid
    alert
    breadcrumbs
    lists
      
</template>

<script>
  import grid from './components/grid.vue'
  import alert from './components/alert.vue'
  import breadcrumbs from './components/breadcrumbs.vue'
  import lists from './components/lists.vue'

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
      lists
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
