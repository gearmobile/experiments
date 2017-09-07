<template lang="pug">

  v-app( light )
    v-container
      app-home

</template>

<script>
  import Home from './components/Home.vue'

  export default {
    data () {
      return {
        //
      }
    },
    components: {
      appHome: Home
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
