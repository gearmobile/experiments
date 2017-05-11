<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Delete Users
    q-tabs( slot="navigation" )
      q-tab( route="/users/delete", exact, replace ) go back

    // CONTAINER SECTION
    .row.gutter.auto
      .layout-view
        .layout-padding

          // INPUT SECTION
          .card.auto
            .card-title.bg-secondary.text-white delete all users
            .card-content
              button.full-width.secondary.raised( @click="onSubmit" ) delete accounts
</template>

<script>
  import axios from 'axios'

  export default {
    methods: {
      onSubmit () {
        axios.delete('http://localhost:5000/user')
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
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
