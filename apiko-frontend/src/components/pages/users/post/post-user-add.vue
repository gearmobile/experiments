<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Add New User
    q-tabs( slot="navigation" )
      q-tab( route="/users/post", exact, replace ) go back

    // CONTAINER SECTION
    .row.gutter.auto
      .layout-view
        .layout-padding

          // INPUT SECTION
          .card.auto
            .card-title.bg-secondary.text-white user new register
            .card-content
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model.trim="user.username", pattern="^\S+\@\S+\.\S+$", required )
                  label user name
              p.caption
                .stacked-label
                  input.full-width( type="password", v-model.trim="user.password", pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,18}$", required )
                  label user password
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model.trim="user.role", required )
                  label user role
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model.trim="user.owner" )
                  label user owner
              button.full-width.secondary.raised( @click="onSubmit" ) add new user
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        user: {
          username: null,
          password: null,
          role: null,
          owner: null
        }
      }
    },
    methods: {
      onSubmit () {
        if (!this.user.username || !this.user.password || !this.user.role) {
          console.log('The fields should not be empty!')
          return false
        }
        else {
          axios.post('http://localhost:5000/users', this.user)
            .then(response => {
              for (let key in this.user) {
                this.user[key] = null
              }
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
