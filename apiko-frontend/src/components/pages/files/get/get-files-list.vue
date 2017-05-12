<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Get List Of Files
    q-tabs( slot="navigation" )
      q-tab( route="/files/get", exact, replace ) go backs

    // CONTAINER SECTION
    .row.gutter.auto
      .layout-view
        .layout-padding
          .card.auto
            .card-title.bg-secondary.text-white get files list
            .card-content
              button.full-width.secondary.raised( @click="onSubmit" ) get list
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        files: null
      }
    },
    methods: {
      onSubmit () {
        axios.get('http://localhost:5000/files/')
          .then(response => {
            this.files = response.data
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
