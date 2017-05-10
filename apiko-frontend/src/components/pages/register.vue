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
            .card-title user register
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
              button.full-width.primary.raised( @click="onSubmit" ) register user
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
