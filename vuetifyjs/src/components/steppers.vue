<template lang="pug">
  
  v-container( fluid )

    h2.text-xs-center
      | steppers

    v-layout
      v-flex( xs12 )

        v-stepper( v-model="el" )
          v-stepper-header
            v-stepper-step( step="1", :complete="el > 1" )
              | step 1
            v-divider
            v-stepper-step( step="2", :complete="el > 2" )
              | step 2
            v-divider
            v-stepper-step( step="3", :complete="el > 3" )
              | step 3
            v-divider
            v-stepper-step( step="4" )
              | step 4
          v-stepper-content( step="1" )
            v-card
              v-card-media( :src="imgPath1", :height="height" )
              v-btn( primary, @click.native="el = 2" )
                | continue
              v-btn( flat )
                | cancel
          v-stepper-content( step="2" )
            v-card
              v-card-media( :src="imgPath2", :height="height" )
              v-btn( primary, @click.native="el = 3" )
                | continue
              v-btn( flat )
                | cancel
          v-stepper-content( step="3" )
            v-card
              v-card-media( :src="imgPath3", :height="height" )
              v-btn( primary, @click.native="el = 4" )
                | continue
              v-btn( flat )
                | cancel
          v-stepper-content( step="4" )
            v-card
              v-card-media( :src="imgPath4", :height="height" )
              v-btn( primary, @click.native="el = 1" )
                | continue
              v-btn( flat )
                | cancel

</template>

<script>
  export default {
    data () {
      return {
        el: 0,
        height: 500
      }
    },
    computed: {
      imgPath1 () {
        return require('../assets/desert.jpg')
      },
      imgPath2 () {
        return require('../assets/drop.jpg')
      },
      imgPath3 () {
        return require('../assets/girl.jpg')
      },
      imgPath4 () {
        return require('../assets/hotel.jpg')
      }
    }
  }
</script>
