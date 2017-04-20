<template lang="pug">
  #about
    h1.caption {{ title }}
    nav.links
      router-link.button.button--green( to="/" ) go home
    nav.links
      router-link.button.button--green( to="/index" ) main page
      router-link.button.button--green( to="/history" ) history page
      router-link.button.button--green( to="/command" ) command page
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
  .caption {
    text-transform: capitalize;
    color: firebrick;
    text-align: center;
  }
</style>
