<template lang="pug">
  header.header
    .container
      nav.navbar( role="navigation", aria-label="main navigation" )
        .navbar-brand
          a.navbar-item( href="/" )
            | title
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    background-color: #1c0b43;
    // background-color: $primary;
  }
</style>
