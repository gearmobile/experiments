<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) User Password Reset
    q-tabs( slot="navigation" )
      q-tab( route="/users/post", exact, replace ) go back

    // CONTAINER SECTION
    .row.gutter.auto
      .layout-view
        .layout-padding

          // INPUT SECTION
          .card.auto
            .card-title.bg-secondary.text-white user password reset
            .card-content
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model.trim="id", pattern="^\d{1,10}$", required )
                  label user id
              button.full-width.secondary.raised( @click="onSubmit" ) reset password
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        id: null
      }
    },
    methods: {
      onSubmit () {
        if (!this.id) {
          console.log('The field ID should not be empty!')
          return false
        }
        else {
          axios.post('http://localhost:5000/users/password/reset/' + this.id)
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
    }
  }
</script>

<style lang="scss">
  .card {
    & .card-title,
    & label {
      text-transform: capitalize;
    }
  }
</style>
