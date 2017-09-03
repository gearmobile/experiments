<template lang="pug">

  v-container
    v-layout( row )
      v-flex( xs12 )
        v-btn.primary( :to="'/user/' + $route.params.userID" )
          | back
        //- v-btn.primary( @click="onClick()" )

</template>

<script>
  export default {
    name: 'userEdit',
    data () {
      return {
        answer: false
      }
    }
    // methods: {
    //   onClick () {
    //     this.answer = true
    //   }
    // }
  }
</script>

<style lang="stylus" scoped>
    //
</style>

