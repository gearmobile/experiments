<template lang="pug">
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
      // msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    background-color: #1c0b43;
  }
</style>
