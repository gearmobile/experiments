<template lang="pug">
  
  v-container( fluid )

    h2.display-2.text-xs-center
      | sliders

    // BASIC EXAMPLE

    h4.text-xs-right
      | #1 continuous

    v-layout.mb-3
      v-flex( xs12 )
        v-card
          v-card-text
            v-slider.px-4( v-model='value1' )
            v-slider.px-4( v-model='value2', disabled )

    // DESCRETE EXAMPLE

    h4.text-xs-right
      | #2 discrete

    v-layout.mb-3
      v-flex( xs12 )
        v-card
          v-card-text
            v-slider.px-4( v-model='value3', thumb-label, step='10' )
            v-slider.px-4( v-model='value4', thumb-label, step='10', snap )

    // ICONS

    h4.text-xs-right
      | #3 icons

    v-layout.mb-3
      v-flex( xs12 )
        v-card
          v-subheader
            | media volume
          v-card-text
            v-slider.px-4( v-model='media', prepend-icon='volume_up', max='70', thumb-label )
          v-subheader
            | alarm volume
          v-card-text
            v-slider.px-4( v-model='alarm', append-icon='alarm', max='50', step='10', thumb-label, snap )

    // WITH NUMERIC INPUT

    h4.text-xs-right.py-3
      | #4 with an editable numeric value

    v-layout
      v-flex( md6, offset-md3 )
        v-card
          v-card-media( height='300px', :style="{ 'background-color': `rgb( ${ red }, ${ green }, ${ blue } )` }" )
          v-card-text
            v-container( fluid )
              v-layout( row, wrap )
                v-flex( xs9 )
                  v-slider.pr-4( label='R', max='255', v-model='red' )
                v-flex( xs3 )
                  v-text-field( type='number', v-model='red' )
                v-flex( xs9 )
                  v-slider.pr-4( label='G', max='255', v-model='green' )
                v-flex( xs3 )
                  v-text-field( type='number', v-model='green' )
                v-flex( xs9 )
                  v-slider.pr-4( label='B', max='255', v-model='blue' )
                v-flex( xs3 )
                  v-text-field( type='number', v-model='blue' )

</template>

<script>
  export default {
    data () {
      return {
        value1: 0,
        value2: 0,
        value3: 0,
        value4: 0,
        alarm: 25,
        media: 20,
        // ---------
        red: 0,
        green: 128,
        blue: 128
        // ---------
      }
    }
  }
</script>
