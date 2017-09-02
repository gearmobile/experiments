<template lang="pug">

  v-container
    v-layout( row )
      v-flex( xs12 )
        //- v-btn.primary( :to="'/user/' + $route.params.userID" )
        v-btn.primary( @click="onClick()" )
          | back

</template>

<script>
  export default {
    name: 'userEdit',
    data () {
      return {
        answer: false
      }
    },
    methods: {
      onClick () {
        this.answer = true
      }
    },
    beforeRouteLeave (to, from, next) {
      if (this.answer) {
        next()
      } else {
        if (confirm('Are you sure to leave this page?')) {
          next()
        } else {
          next(false)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
    //
</style>

