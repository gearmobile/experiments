<template lang="pug">

  v-app( light )
    v-container
      app-nav
      router-view

</template>

<script>
  const Nav = () => import('./components/Toolbar.vue')

  export default {
    components: {
      appNav: Nav
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
