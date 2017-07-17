<template lang="pug">
  v-app
    v-container( fluid )
      
      // PRIMO SECTION
      v-layout( row )
        v-flex( xs12 )
          app-primo

      // SECONDO SECTION
      v-layout( row )
        v-flex( xs12 )
          app-secondo

</template>

<script>
  import primo from './components/primo.vue'
  import secondo from './components/secondo.vue'

  export default {
    data () {
      return {
        //
      }
    },
    components: {
      appPrimo: primo,
      appSecondo: secondo
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
