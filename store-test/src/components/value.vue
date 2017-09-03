<template lang="pug">
  v-container
    v-layout( row )
      v-flex( xs12 )
        h4.text-xs-center
          | Value is {{ value }}
        v-text-field( v-model="value" )
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'value',
    methods: {
      ...mapActions({
        valueSet: 'setValue'
      })
    },
    computed: {
      ...mapGetters({
        valueGet: 'getValue'
      }),
      value: {
        get () { return this.valueGet },
        set (value) { this.valueSet(value) }
      }
    }
  }
</script>

<style lang="stylus" scoped>
    //
</style>
