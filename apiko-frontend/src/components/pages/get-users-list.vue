<template lang="pug">
  q-layout
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Apiko
    q-tabs( slot="navigation" )
      q-tab( route="/", exact, replace ) home
    .row.gutter.auto
      .layout-view
        .layout-padding
          .card.auto
            .card-title get users list
            .card-content
              button.full-width.primary.raised( @click="onSubmit" ) get list
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
