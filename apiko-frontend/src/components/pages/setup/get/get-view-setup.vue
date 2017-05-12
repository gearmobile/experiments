<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) View Apiko Setup
    q-tabs( slot="navigation" )
      q-tab( route="/setup", exact, replace ) go back

    // CONTAINER SECTION
    .row.gutter.auto
      .layout-view
        .layout-padding
          
          // INPUT SECTION
          .card.auto
            .card-title.bg-secondary.text-white apiko setup
            .card-content
              button.full-width.secondary.raised( @click="onSubmit" ) view setup

</template>

<script>
  import axios from 'axios'

  export default {
    methods: {
      onSubmit () {
        axios.get('http://localhost:5000/apiko/setup')
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
    & .icon-close {
      cursor: pointer;
    }
    & .is-lower {
      text-transform: lowercase;
    }
  }
</style>
