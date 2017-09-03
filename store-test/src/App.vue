<template lang="pug">
  v-app( light )
    v-container
      v-layout( row )
        v-flex( xs12 )
          h2.text-xs-center
            | Vuex
      v-layout( row )
        v-flex( xs12 )
          app-output
      v-layout( row )
        v-flex( xs12 )
          app-controls
      v-layout( row )
        v-flex( xs12 )
          app-value
</template>

<script>
  import Output from './components/output'
  import Controls from './components/controls'
  import Value from './components/value'

  export default {
    components: {
      appOutput: Output,
      appControls: Controls,
      appValue: Value
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
