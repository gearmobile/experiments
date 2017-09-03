<template lang="pug">
  v-container
    v-layout( row )
      v-flex.text-xs-center( xs12 )
        | Counter is {{ counter }}
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'output',
    computed: {
      ...mapGetters({
        counterGet: 'getCounter'
      }),
      counter () {
        return this.counterGet
      }
    }
  }
</script>

<style lang="stylus" scoped>
    //
</style>
