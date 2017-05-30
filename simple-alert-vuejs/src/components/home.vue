<template lang="pug">
  #home
    alert
      isUseRadius = true
      isUseIcon = true
      ref = "alert-link"
    button( type="button", @click="openWindow()" ) alert info
</template>

<script>
  import Alert from 'vue2-simplert'

  export default {
    name: 'home',
    data () {
      return {
        config: {
          title: 'My First Alert',
          message: 'First Alert in Vue.js',
          type: 'info'
        }
      }
    },
    components: {
      Alert
    },
    methods: {
      openWindow () {
        this.$refs.alertLink.openSimplert(this.config)
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
