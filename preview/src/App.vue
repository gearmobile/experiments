<template lang="pug">
  #app
    app-header
    //- app-demo
    app-test
    app-contact
    app-info
    app-footer
</template>

<script>
  const Header = () => import('./components/Header.vue')
  // const Demo = () => import('./components/Demo.vue')
  const Test = () => import('./components/Test.vue')
  const Contact = () => import('./components/Contact.vue')
  const Info = () => import('./components/Info.vue')
  const Footer = () => import('./components/Footer.vue')

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      // appDemo: Demo,
      appTest: Test,
      appContact: Contact,
      appInfo: Info,
      appFooter: Footer
    }
  }
</script>

<style lang="scss">
  //
</style>
