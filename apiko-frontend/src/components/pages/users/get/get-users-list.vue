<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Get List Of Users
    q-tabs( slot="navigation" )
      q-tab( route="/users/get", exact, replace ) go backs

    // CONTAINER SECTION
    .row.gutter.auto
      .layout-view
        .layout-padding
          .card.auto
            .card-title.bg-secondary.text-white get users list
            .card-content
              button.full-width.secondary.raised( @click="onSubmit" ) get list
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        users: null
      }
    },
    methods: {
      onSubmit () {
        axios.get('http://localhost:5000/users/')
          .then(response => {
            this.users = response.data
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
