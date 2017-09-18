<template lang="pug">
  #app
    app-header
    app-hero
    app-contact
</template>

<script>
  const Header = () => import('./components/Header.vue')
  const Hero = () => import('./components/Hero.vue')
  const Contact = () => import('./components/Contact.vue')

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appHero: Hero,
      appContact: Contact
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
