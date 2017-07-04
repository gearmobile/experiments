<template lang="pug">

  v-container( fluid )
    
    v-layout( row )
      v-flex( xs12 )
        v-card.primary
          v-card-text.text-xs-center 12
    
    v-layout( row )
      v-flex( v-for="i in 4", :key="i", xs4, ma-2 )
        v-card.secondary
          v-card-text.text-xs-right xs4

    v-layout
      v-flex( xs10 offset-xs1 )
        v-card.primary
          v-card-text offset 1 column

    v-layout
      v-flex( xs7 offset-xs5 )
        v-card.secondary
          v-card-text xs7 offset-xs5

    v-layout
      v-flex( xs5 )
        v-card.primary
          v-card-text xs5
      v-flex( xs5 offset-xs2 )
        v-card.secondary
          v-card-text xs5 offset-xs2

    v-layout( row, justify-space-between )
      v-flex( xs1 )
        v-card.primary
          v-card-text xs1
      v-flex( xs1 )
        v-card.primary
          v-card-text xs1
      v-flex( xs1 )
        v-card.primary
          v-card-text xs1

    v-layout( row, justify-space-around )
      v-flex( xs1 )
        v-card.primary
          v-card-text xs1
      v-flex( xs1 )
        v-card.secondary
          v-card-text xs1
      v-flex( xs1 )
        v-card.accent
          v-card-text xs1

</template>

<script>
  export default {
    name: 'grid',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>
