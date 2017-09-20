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
  //
</style>
