<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Get File
    q-tabs( slot="navigation" )
      q-tab( route="/files/get", exact, replace ) go back

    // CONTAINER SECTION
    .row.gutter.auto
      .layout-view
        .layout-padding
          
          // INPUT SECTION
          .card.auto
            .card-title.bg-secondary.text-white get file
            .card-content
              p.caption
                .stacked-label
                  input.full-width( v-model.trim="id", pattern="^\d{1,10}$", required )
                  label file id
              button.full-width.secondary.raised( @click="onSubmit" ) get file
          
          // OUTPUT SECTION
          //- .card.auto( v-if="file" )
          //-   .card-title.bg-positive.text-white user profile
          //-   .card-content
          //-     p User Name: {{ user.username }}
          //-     p User ID: {{ user.id }}
          //-     p User Role: {{ user.role }}
          //-     p User Owner: {{ user.owner }}
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        id: null,
        file: null
      }
    },
    methods: {
      onSubmit () {
        axios.get('http://localhost:5000/files/' + this.id)
          .then(response => {
            this.id = null
            this.file = response.data
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
