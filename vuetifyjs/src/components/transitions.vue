<template lang="pug">
  
  v-container( fluid )

    h2.text-xs-center.mt-3
      | transitions

    h4.text-xs-right.mt-3
      | #1 slide x transitions

    h6.text-xs-right.mt-2
      | slide x transitions move along the horizontal axis

    v-layout
      v-flex.text-xs-center( xs6, offset-xs3 )
        v-menu( transition="v-slide-x-transition" )
          v-btn( primary, dark, slot="activator" )
            | transition x
          v-list
            v-list-tile( v-for="i in 5", :key="i" )
              v-list-tile-title( v-text="'item ' + i" )
        v-menu( transition="v-slide-x-reverse-transition" )
          v-btn( secondary, dark, slot="activator" )
            | transition x reverse
          v-list
            v-list-tile( v-for="i in 5", :key="i" )
              v-list-tile-title( v-text="'item ' + i" )

    h4.text-xs-right.mt-3
      | #2 slide y transitions

    h6.text-xs-right.mt-2
      | slide y transitions move along the vertical axis

    v-layout
      v-flex.text-xs-center( xs6, offset-xs3 )
        v-menu( transition="v-slide-y-transition" )
          v-btn( primary, dark, slot="activator" )
            | transition y
          v-list
            v-list-tile( v-for="i in 5", :key="i" )
              v-list-tile-title( v-text="'item ' + i" )
        v-menu( transition="v-slide-y-reverse-transition" )
          v-btn( secondary, dark, slot="activator" )
            | transition y reverse
          v-list
            v-list-tile( v-for="i in 5", :key="i" )
              v-list-tile-title( v-text="'item ' + i" )

    h4.text-xs-right.mt-3
      | #3 scale transition

    v-layout
      v-flex.text-xs-center( xs6, offset-xs3 )
        v-menu( transition="v-scale-transition" )
          v-btn( primary, dark, slot="activator" )
            | scale transition
          v-list
            v-list-tile( v-for="i in 5", :key="i" )
              v-list-tile-title( v-text="'item ' + i" )

    h4.text-xs-right.mt-3
      | #4 fade transition

    v-layout
      v-flex.text-xs-center( xs6, offset-xs3 )
        v-menu( transition="v-fade-transition" )
          v-btn( primary, dark, slot="activator" )
            | fade transition
          v-list
            v-list-tile( v-for="i in 5", :key="i" )
              v-list-tile-title( v-text="'item ' + i" )


</template>

<script>
  export default {
    data () {
      return {
        //
      }
    }
  }
</script>
