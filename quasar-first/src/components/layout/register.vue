<template lang="pug">
  .column
    .auto
      .card
        .card-title.bg-primary.text-white
          .toolbar
            q-tabs( slot="navigation" )
              q-tab( icon="arrow_back", route="/" )
            q-toolbar-title( :padding="1" ) User Register
        .card-content
          .floating-label
            input.full-width( required, v-model="firstName" )
            label First Name
          .floating-label
            input.full-width( required, v-model="lastName" )
            label Last Name
          .floating-label
            input.full-width( required, v-model="password" )
            label Password
          .floating-label
            input.full-width( required, v-model="repeatPassword" )
            label Repeat Password
    .auto
      button.teal.raised register
</template>

<script>
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      password: '',
      repeatPassword: ''
    }
  }
}
</script>

<style>
</style>
