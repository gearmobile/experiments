<template lang="pug">
  #home
    simplert
      isUseRadius = true
      isUseIcon = true
      ref = 'simplert'
    button( type="button", @click="openWindow()" ) alert info
</template>

<script>
  import Simplert from 'vue2-simplert'

  export default {
    name: 'home',
    data () {
      return {
        config: {
          title: 'Opened Simplert',
          message: 'Now you can close this window',
          type: 'info',
          onClose: this.onClose
        }
      }
    },
    components: {
      Simplert
    },
    methods: {
      openWindow () {
        this.$refs.simplert.openSimplert(this.config)
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
