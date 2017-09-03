<template lang="pug">
  v-container
    v-layout( row )
      v-flex.text-xs-right( xs6 )
        v-btn.primary( @click="encrease()" )
          | encrease
      v-flex.text-xs-left( xs6 )
        v-btn.primary( @click="decrease()" )
          | decrease
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'controls',
    methods: {
      ...mapActions({
        large: 'increment',
        small: 'decrement'
      }),
      encrease () {
        this.large()
      },
      decrease () {
        this.small()
      }
    }
  }
</script>

<style lang="stylus" scoped>
    //
</style>
