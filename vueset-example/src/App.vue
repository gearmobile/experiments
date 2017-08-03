<template lang="pug">
  v-app
    app-primo
</template>

<script>
  import primo from './components/primo.vue'

  export default {
    data () {
      return {
        //
      }
    },
    components: {
      appPrimo: primo
    },
    created () {
      this.$store.commit('INIT_STATES')
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
