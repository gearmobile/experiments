<template lang="pug">
  q-layout
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Apiko
    q-tabs( slot="navigation" )
      q-tab( route="/", exact, replace ) home
    .row.gutter.auto
      .card.auto
        .card-title user login
        .card-content
          p.caption
            .stacked-label
              input.full-width( v-model="user.username" )
              label user name
          p.caption
            .stacked-label
              input.full-width( v-model="user.password" )
              label user password
          button.full-width.primary.raised( @click="onSubmit" ) login
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
          axios.post('http://localhost:8080/users/login', this.user)
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

<style lang="styl">
  .card .card-title
  .card label
    text-transform: capitalize;
</style>
