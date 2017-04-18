<template lang="pug">
  q-layout
    //- .toolbar( slot="header" )
    q-tabs( slot="navigation" )
      q-tab( icon="view_day", route="./showcase/home.vue", exact, replace ) home
      q-tab( icon="view_day", route="./showcase/login.vue", replace ) login
      q-tab( icon="view_day", route="./showcase/register.vue", replace ) register
    //- .layout-view
    //-   .card
    //-     .card-title.bg-secondary.text-white user login
    //-     .card-content
    //-       .floating-label
    //-         input.full-width( type="text", v-model.trim="username", required )
    //-         label your username here
    //-       .floating-label
    //-         input.full-width( type="password", v-model.trim="password", required )
    //-         label your password here
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>

<style lang="styl">
  /**/
</style>
