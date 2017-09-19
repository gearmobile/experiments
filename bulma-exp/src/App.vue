<template lang="pug">
  #app
    app-home
</template>

<script>
  const Home = () => import('./components/Home.vue')

  export default {
    name: 'app',
    components: {
      appHome: Home
    }
  }
</script>

<style lang="scss">
  //
</style>
