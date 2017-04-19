<template lang="pug">
  .column
    .auto
      .card
        .card-title.bg-primary.text-white
          .toolbar
            q-tabs( slot="navigation" )
              q-tab( icon="arrow_back", route="/" )
            q-toolbar-title( :padding="1" ) User Login
        .card-content
          .floating-label
            input.full-width( required, v-model.trim="name" )
            label User Name
          .floating-label
            input.full-width( required, v-model="password" )
            label User Password
    .auto
      button.secondary.raised login
</template>

<script>
  export default {
    data () {
      return {
        name: '',
        password: ''
      }
    }
  }
</script>

<style>
</style>
