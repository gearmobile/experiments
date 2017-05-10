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
            .card-title user login
            .card-content
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model="user.username", pattern="^\S+\@\S+\.\S+$", required )
                  label user name
              p.caption
                .stacked-label
                  input.full-width( type="password", v-model="user.password", pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,18}$", required )
                  label user password
              button.full-width.primary.raised( @click="onSubmit" ) login user
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit () {
        if (!this.user.username || !this.user.password) {
          console.log('The fields should not be empty!')
          return false
        }
        else {
          axios.post('http://localhost:5000/users/login', this.user)
            .then(response => {
              console.log(response.data)
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
