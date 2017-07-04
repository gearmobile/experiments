<template lang="pug">

  v-container( fluid )

    h2.text-xs-center
      | grid system
    
    v-layout( row )
      v-flex( xs12 )
        v-card.primary
          v-card-text.text-xs-center.white--text
            | 12
    
    v-layout( row )
      v-flex( v-for="i in 4", :key="i", xs4, ma-2 )
        v-card.secondary
          v-card-text.text-xs-right.white--text
            | xs4

    v-layout( mb-2 )
      v-flex( xs10 offset-xs1 )
        v-card.primary
          v-card-text.text-xs-center.white--text
            | xs10 offset-xs1

    v-layout
      v-flex( xs7 offset-xs5 )
        v-card.secondary
          v-card-text
            | xs7 offset-xs5

    v-layout( mt-2, mb-2 )
      v-flex( xs5 )
        v-card.primary
          v-card-text.text-xs-center
            | xs5
      v-flex( xs5 offset-xs2 )
        v-card.secondary
          v-card-text.text-xs-center
            | xs5 offset-xs2

    v-layout( row, justify-space-between, mb-3, mt-3 )
      v-flex( v-for="i in 6", :key="i", xs1 )
        v-card.primary
          v-card-text
            | xs1

    v-layout( row, justify-space-around )
      v-flex( v-for="i in 3", :key="i", xs1 )
        v-card.secondary.elevation-10
          v-card-text.text-xs-center
            | xs1

</template>

<script>
  export default {
    name: 'grid'
  }
</script>
