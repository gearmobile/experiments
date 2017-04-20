<template lang="pug">
  #contacts
    h1.caption {{ title }}
    nav.links
      router-link.button.button--green( tag="a", to="/" ) go home
</template>

<script>
  export default {
    name: 'contacts',
    data () {
      return {
        title: 'this is contacts page'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .caption {
    text-align: center;
    color: forestgreen;
  }
</style>
