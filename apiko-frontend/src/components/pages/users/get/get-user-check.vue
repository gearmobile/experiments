<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Check User Profile
    q-tabs( slot="navigation" )
      q-tab( route="/users/get", exact, replace ) go back

    // CONTAINER SECTION
    .row.gutter.auto
      .layout-view
        .layout-padding
          
          // INPUT SECTION
          .card.auto
            .card-title.bg-secondary.text-white check username
            .card-content
              p.caption
                .stacked-label
                  input.full-width( v-model.trim="username", pattern="^\S+\@\S+\.\S+$", required )
                  label user username
              button.full-width.secondary.raised( @click="onSubmit" ) check username
          
          // OUTPUT SUCCESS SECTION
          .card.auto( v-if="userExist" )
            .card-title.bg-positive.text-white Success! User - <span class="is-lower">{{ userExistName }} {{ userExist }}!</span>
              i.icon-close.on-right.pull-right( @click="onCloseSuccess()" ) close

          // OUTPUT ERROR SECTION
          .card.auto( v-if="userNotExists" )
            .card-title.bg-negative.text-white
              | {{ userNotExists }}
              i.icon-close.on-right.pull-right( @click="onCloseError()" ) close

</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        username: null,
        userExist: null,
        userExistName: null,
        userNotExists: null
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
            this.userNotExists = 'Error! Invalid username!'
            console.log(error)
          })
      },
      onCloseError () {
        this.userNotExists = null
        this.clearForm()
      },
      onCloseSuccess () {
        this.userExist = null
        this.clearForm()
      },
      clearForm () {
        this.username = null
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
    & .icon-close {
      cursor: pointer;
    }
    & .is-lower {
      text-transform: lowercase;
    }
  }
</style>
