<template lang="pug">
  q-layout
    q-tabs( slot="navigation" )
      q-tab( icon="view_day", route="/login", exact, replace ) login
      q-tab( icon="view_day", route="/register", exact, replace ) register
    router-view.layout-view
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
  // 
</style>
