<template lang="pug">
  q-layout
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Apiko
    q-tabs( slot="navigation" )
      q-tab( route="/", exact, replace ) home
    .row.gutter.auto
      .card.auto
        .card-title user register
        .card-content
          p.caption
            .floating-label
              input.full-width( v-model="user.username", required )
              label user name
          p.caption
            .floating-label
              input.full-width( v-model="user.password", required )
              label user password
          button.full-width.primary.raised( @click="onSubmit" ) register
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
          axios.post('http://localhost:8080/users', this.user)
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
