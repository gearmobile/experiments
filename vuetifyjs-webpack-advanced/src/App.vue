<template lang='pug'>
  #main
    
    v-layout( row )
      v-flex( xs12 )
        v-card.primary
          v-card-text 12
    
    v-layout( row )
      v-flex( xs6 )
        v-card.secondary
          v-card-text 6
      v-flex( xs6 )
        v-card.secondary
          v-card-text 6
      v-flex( xs6 )
        v-card.secondary
          v-card-text 6
      v-flex( xs6 )
        v-card.secondary
          v-card-text 6

    v-layout
      //- .text-xs-center
      .text-xs-center
        v-pagination( :length.number="4", v-model="page", circle )
      
</template>

<script>
  export default {
    data () {
      return {
        title: 'Vuetify.js'
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
