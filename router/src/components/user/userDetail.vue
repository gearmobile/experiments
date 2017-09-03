<template lang="pug">

  v-container
    v-layout( row )
      v-flex( xs12 )
        h4
          | User Details
    v-layout( row )
      v-flex( xs12 )
        | Current User Id - {{ $route.params.userID }}
    v-layout( row )
      v-flex( xs12 )
        | Current User Locale - {{ $route.query.locale }}
    v-layout( row )
      v-flex( xs12 )
        v-btn.primary( :to="{ name: 'listUsers' }" )
          | to users list
        v-btn.primary( :to="'/user/' + $route.params.userID + '/edit'" )
          | edit user details


</template>

<script>
  export default {
    name: 'userDetail',
    data () {
      return {
        check: true
      }
    },
    beforeRouteEnter (to, from, next) {
      next(vm => vm.check)
      console.log('before route enter checked')
    }
  }
</script>

<style lang="stylus" scoped>
    //
</style>

