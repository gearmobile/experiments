<template lang="pug">
  #about
    h1.caption {{ title }}
    nav.links
      router-link.button.button--green( tag="a", to="/" ) go home
</template>

<script>
  export default {
    name: 'about',
    data () {
      return {
        title: 'this is about page'
      }
    }
  }
</script>

<style lang="scss" scoped>
// 
</style>
