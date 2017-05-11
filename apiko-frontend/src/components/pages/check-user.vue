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
            .card-title check username
            .card-content
              p.caption
                .stacked-label
                  input.full-width( v-model.trim="username", pattern="^\S+\@\S+\.\S+$", required )
                  label user username
              button.full-width.primary.raised( @click="onSubmit" ) check username
          
          // OUTPUT SECTION
          .card.auto( v-if="userExist" )
            .card-title user profile
            .card-content
              p User - {{ userExistName }} {{ userExist }}

</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        username: null,
        userExist: null,
        userExistName: null
      }
    },
    methods: {
      onSubmit () {
        axios.get('http://localhost:5000/users/exists/' + this.username)
          .then(response => {
            this.userExist = response.data.exists ? 'exists' : 'not exists'
            this.userExistName = this.username
            setTimeout(() => {
              this.username = null
            }, 2000)
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
