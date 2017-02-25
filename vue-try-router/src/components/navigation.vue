<template>
  <ul class="nav nav-pills nav-justified">
    <router-link tag="li" to="/"><a>{{ pageOne }}</a></router-link>
    <router-link tag="li" to="/users"><a>{{ pageTwo }}</a></router-link>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        titke: 'home page',
        pageOne: 'home page',
        pageTwo: 'users page',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nav {
    margin-bottom: 20px;
  }
</style>
