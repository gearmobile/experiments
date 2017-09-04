<template lang="pug">
  v-container
    v-layout( row )
      v-flex( xs8, offset-xs2 )
        h4.text-xs-center
          | Value is {{ value }}
        v-text-field( v-model="value", label="Value" )
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import * as types from '../store/types'

  export default {
    name: 'value',
    methods: {
      ...mapActions({
        valueSet: [types.SET_VALUE]
      })
    },
    computed: {
      ...mapGetters({
        valueGet: [types.GET_VALUE]
      }),
      value: {
        get () { return this.valueGet },
        set (value) { this.valueSet(value) }
      }
    }
  }
</script>
