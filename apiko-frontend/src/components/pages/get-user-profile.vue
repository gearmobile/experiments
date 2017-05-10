<template lang="pug">
  q-layout
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Apiko
    q-tabs( slot="navigation" )
      q-tab( route="/", exact, replace ) home
    .row.gutter.auto
      .layout-view
        .layout-padding
          
          // INPUT SECTION
          .card.auto
            .card-title get user profile
            .card-content
              p.caption
                .stacked-label
                  input.full-width( v-model.trim="id", pattern="^\d{1,10}$", required )
                  label user id
              button.full-width.primary.raised( @click="onSubmit" ) get user profile
          
          // OUTPUT SECTION
          .card.auto( v-if="user" )
            .card-title user profile
            .card-content
              p User Name: {{ user.username }}
              p User ID: {{ user.id }}
              p User Role: {{ user.role }}
              p User Owner: {{ user.owner }}
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        id: null,
        user: null
      }
    },
    methods: {
      onSubmit () {
        axios.get('http://localhost:5000/users/' + this.id)
          .then(response => {
            this.id = null
            this.user = response.data
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
