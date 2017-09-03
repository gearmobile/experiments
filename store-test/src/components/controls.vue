<template lang="pug">
  v-container
    v-layout( row )
      v-flex.text-xs-right( xs6 )
        v-btn.primary( @click="incerement()" )
          | encrease
      v-flex.text-xs-left( xs6 )
        v-btn.primary( @click="decrement()" )
          | decrease
</template>

<script>
  export default {
    name: 'controls',
    methods: {
      incerement () {
        this.$store.dispatch('incerement')
      },
      decrement () {
        this.$store.dispatch('decrement')
      }
    }
  }
</script>

<style lang="stylus" scoped>
    //
</style>
