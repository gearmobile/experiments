<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Get User Profile
    q-tabs( slot="navigation" )
      q-tab( route="/users/get", exact, replace ) go back

    // CONTAINER SECTION
    .row.gutter.auto
      .layout-view
        .layout-padding
          
          // INPUT SECTION
          .card.auto
            .card-title.bg-secondary.text-white get user profile
            .card-content
              p.caption
                .stacked-label
                  input.full-width( v-model.trim="id", pattern="^\d{1,10}$", required )
                  label user id
              button.full-width.secondary.raised( @click="onSubmit" ) get user profile
          
          // OUTPUT SECTION
          .card.auto( v-if="user" )
            .card-title.bg-positive.text-white user profile
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
