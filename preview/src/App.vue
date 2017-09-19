<template lang="pug">
  #app
    app-header
    app-hero
    app-contact
    app-info
    app-footer
</template>

<script>
  const Header = () => import('./components/Header.vue')
  const Hero = () => import('./components/Hero.vue')
  const Contact = () => import('./components/Contact.vue')
  const Info = () => import('./components/Info.vue')
  const Footer = () => import('./components/Footer.vue')

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appHero: Hero,
      appContact: Contact,
      appInfo: Info,
      appFooter: Footer
    }
  }
</script>

<style lang="scss">
  @import "../node_modules/bulma/sass/utilities/initial-variables.sass";
  
  // UPDATE COLORS
  $blue: #662eff;
  $blue-dark: #1c0b43;
  $blue-light: #8b61ff;

  $primary: $blue-dark;
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
