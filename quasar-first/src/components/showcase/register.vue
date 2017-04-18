<template lang="pug">
  .layout-view
    .card
      .card-title.bg-secondary.text-white user register
      .card-content
        .floating-label
          input.full-width( type="text", v-model.trim="username", required )
          label your username here
        .floating-label
          input.full-width( type="password", v-model.trim="password", required )
          label your password here
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="styl" scoped>
  /**/
</style>
