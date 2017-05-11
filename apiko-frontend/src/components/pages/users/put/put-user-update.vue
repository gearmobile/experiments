<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) User Update
    q-tabs( slot="navigation" )
      q-tab( route="/users/put", exact, replace ) go back

    // CONTAINER SECTION
    .row.gutter.auto
      .layout-view
        .layout-padding

          // INPUT SECTION
          .card.auto
            .card-title.bg-secondary.text-white user update profile
            .card-content
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model.trim="user.id", pattern="", required )
                  label user id
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model.trim="user.username", pattern="^\S+\@\S+\.\S+$" )
                  label user name
              p.caption
                .stacked-label
                  input.full-width( type="password", v-model.trim="user.password", pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,18}$" )
                  label user password
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model.trim="user.role" )
                  label user role
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model.trim="user.owner" )
                  label user owner
              button.full-width.secondary.raised( @click="onSubmit" ) update profile
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        user: {
          id: null,
          username: null,
          password: null,
          role: null,
          owner: null
        }
      }
    },
    methods: {
      onSubmit () {
        if (!this.user.id) {
          console.log('The field should not be empty!')
          return false
        }
        else {
          axios.put('http://localhost:5000/users/' + this.user.id)
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
