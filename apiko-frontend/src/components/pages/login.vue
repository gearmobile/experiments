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
            .card-title.bg-secondary.text-white user login
            .card-content
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model="user.username", pattern="^\S+\@\S+\.\S+$", required )
                  label user name
              p.caption
                .stacked-label
                  input.full-width( type="password", v-model="user.password", pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,18}$", required )
                  label user password
              button.full-width.secondary.raised( @click="onSubmit" ) login user
          
          // OUTPUT SUCCESS SECTION
          .card.auto( v-if="userLoginSuccess" )
            .card-title.bg-positive.text-white hello,
              = ' '
              span.is-lower {{ userLoginSuccess.user.username }}!
            .card-content
              p Your token is: {{ userLoginSuccess.token }}
              p Your ID is: {{ userLoginSuccess.user.id }}

          // OUTPUT ERROR SECTION
          .card.auto( v-if="userLoginError" )
            .card-title.bg-negative.text-white
              | {{ userLoginError }}
              i.icon-close.on-right.pull-right( @click="onClose()" ) close
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        user: {
          username: null,
          password: null
        },
        userLoginSuccess: null,
        userLoginError: null
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
              this.userLoginSuccess = response.data
              this.clearForm()
            })
            .catch(error => {
              this.userLoginError = 'Error! Invalid username or password!'
              console.log(error)
            })
        }
      },
      onClose () {
        this.userLoginError = null
        this.clearForm()
      },
      clearForm () {
        for (let key in this.user) {
          this.user[key] = null
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
    & .is-lower {
      text-transform: lowercase;
    }

    & .icon-close {
      cursor: pointer;
    }
  }
</style>
