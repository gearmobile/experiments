<template lang="pug">

  v-app( light )
    v-container
      app-nav
      router-view
      //- app-home

</template>

<script>
  // import Home from './components/Home.vue'
  const Nav = () => import('./components/Toolbar.vue')

  export default {
    data () {
      return {
        //
      }
    },
    components: {
      appNav: Nav
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
