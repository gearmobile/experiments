<template lang="pug">
  section.container
    section.container__inner
      app-logo
      h1.title {{ title }}
      h2.subtitle {{ subtitle }}
      nav.links
        router-link.button.button--green( to="/about", tag="a"  ) about
        router-link.button.button--grey( to="/contacts", tag="a" ) contacts
</template>

<script>
  import Logo from '~components/Logo.vue'

  export default {
    data () {
      return {
        title: 'nuxt.js',
        subtitle: 'Universal Vue.js Application'
      }
    },
    components: {
      appLogo: Logo
    }
  }
</script>

<style lang="scss">
  .button {
    text-transform: capitalize;
  }
  .container
    {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      justify-content: center;
    }
  .title
    {
      text-transform: uppercase;
      font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
      display: block;
      font-weight: 300;
      font-size: 100px;
      color: #35495e;
      letter-spacing: 1px;
    }
  .subtitle
    {
      font-weight: 300;
      font-size: 42px;
      color: #526488;
      word-spacing: 5px;
      padding-bottom: 15px;
    }
  .links
    {
      padding-top: 15px;
    }
</style>
