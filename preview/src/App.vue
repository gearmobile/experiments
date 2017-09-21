<template lang="pug">
  #app
    app-header
    app-demo
    app-contact
    app-info
    app-footer
</template>

<script>
  const Header = () => import('./components/Header.vue')
  const Demo = () => import('./components/Demo.vue')
  const Contact = () => import('./components/Contact.vue')
  const Info = () => import('./components/Info.vue')
  const Footer = () => import('./components/Footer.vue')

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appDemo: Demo,
      appContact: Contact,
      appInfo: Info,
      appFooter: Footer
    }
  }
</script>

<style lang="scss">
  //
</style>
