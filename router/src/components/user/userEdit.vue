<template lang="pug">

  v-container
    v-layout( row )
      v-flex( xs12 )
        v-btn.primary( @click="confirmed = true" )
          | back to users list

</template>

<script>
  export default {
    name: 'userEdit',
    data () {
      return {
        confirmed: false
      }
    },
    beforeRouteLeave (to, from, next) {
      if (this.confirmed) {
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

