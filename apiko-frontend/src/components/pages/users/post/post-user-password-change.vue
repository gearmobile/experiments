<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) User Password Change
    q-tabs( slot="navigation" )
      q-tab( route="/users/post", exact, replace ) go back

    // CONTAINER SECTION
    .row.gutter.auto
      .layout-view
        .layout-padding

          // INPUT SECTION
          .card.auto
            .card-title.bg-secondary.text-white user password change
            .card-content
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model.trim="id", pattern="^\d{1,10}$", required )
                  label user id
              p.caption
                .stacked-label
                  input.full-width( type="password", v-model="passwd.current", required )
                  label current password
              p.caption
                .stacked-label
                  input.full-width( type="password", v-model="passwd.new", pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,18}$", required )
                  label new password
              button.full-width.secondary.raised( @click="onSubmit" ) change password
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        id: null,
        passwd: {
          current: null,
          new: null
        }
      }
    },
    methods: {
      onSubmit () {
        if (!this.id || !this.passwd.current || !this.passwd.new) {
          console.log('The fields should not be empty!')
          return false
        }
        else {
          axios.post('http://localhost:5000/users/password/change/' + this.id, this.passwd)
            .then(response => {
              console.log(response)
              for (let key in this.passwd) {
                this.passwd[key] = null
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
