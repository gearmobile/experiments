<template lang="pug">
  
  v-container( fluid )

    h2.text-xs-center
      | buttons

    h4.text-xs-right
      | #1 Flat

    v-layout
      
      v-flex( xs12 )
        v-card.white
          v-card-text

            v-btn( flat, dark )
              | normal button

            v-btn.btn--dark-flat-focused( flat, dark )
              | focused button

            v-btn.btn--dark-flat-pressed( flat, dark )
              | pressed button

            v-btn( flat, dark, disabled )
              | disabled button

    v-layout( mt-3 )

      v-flex( xs12 )
        v-card.secondary.elevation-0
          v-card-text

            v-btn( flat, light )
              | normal button

            v-btn.btn--light-flat-focused( flat, light )
              | focused button

            v-btn.btn--light-flat-pressed( flat, light )
              | pressed button

            v-btn( flat, light, disabled )
              | disabled button

    h4.text-xs-right.mt-3
      | #2 Raised

    v-layout

      v-flex( xs12 )
        v-card
          v-card-text
            
            v-btn( default, dark )
              | normal button

            v-btn.btn--default-dark-focused( default, dark )
              | focused button

</template>

<script>
  export default {
    //
  }
</script>
