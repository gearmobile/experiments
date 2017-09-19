<template lang="pug">
  #app
    app-home
    //- app-secondo
</template>

<script>
  const Home = () => import('./components/Home.vue')
  // const Secondo = () => import('./components/Secondo.vue')

  export default {
    name: 'app',
    components: {
      appHome: Home
      // appSecondo: Secondo
    }
  }
</script>

<style lang="scss">
  //
</style>
