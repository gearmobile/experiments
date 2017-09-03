<template lang="pug">
  v-container
    v-layout( row )
      v-flex.text-xs-center( xs12 )
        h3
          | Counter is {{ counter }}
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as types from '../store/types'

  export default {
    name: 'output',
    computed: {
      ...mapGetters({
        // counterGet: 'getCounter'
        counterGet: [types.GET_COUNTER]
      }),
      counter () {
        return this.counterGet
      }
    }
  }
</script>

