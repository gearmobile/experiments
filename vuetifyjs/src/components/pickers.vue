<template lang="pug">
  
  v-container( fluid )

    h2.display-2.text-xs-center
      | pickers
    
    p.mb-0
      | The <code>v-date-picker</code> and <code>v-time-picker</code> are stand-alone components that can be utilized in many existing Vuetify components. They offer the user a visual reprensetation for selecting date and time.

    // BASIC DATE PICKER

    h4.text-xs-right
      | #1 date pickers - light

    v-layout( row, wrap )
      v-flex.ma-3( md12, lg4 )
        v-date-picker( v-model='b1' )
      v-flex.ma-3( md12, lg8 )
        v-date-picker( v-model='b2', landscape )

    // BASIC DARK DATE PICKER

    h4.text-xs-right
      | #2 date pickers - dark

    p.mb-0
      | date pickers come in a dark variant which utilizes the applications primary accent color

    v-layout( row, wrap )
      v-flex.ma-3( md12, lg4 )
        v-date-picker( v-model='d1', dark, actions )
        // actions - use this when using actions inside the picker
      v-flex.ma-3( md12, lg8 )
        v-date-picker( v-model='d2', landscape, dark, actions )

    // DATE PICKERS - IN DIALOG AND MENU

    h4.text-xs-right
      | #3 date pickers - in dialog and menu

    p.mb-0.px-4
      | When integrating a picker into a <code>v-text-field</code>, it is recommended to use the readonly prop. This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.

    // TIME PICKERS BASIC

    h4.text-xs-right
      | # time pickers basic

    v-layout( row, wrap )
      v-flex.ma-3( md12, lg4 )
        v-time-picker( v-model='tb1' )
      v-flex.ma-3( md12, lg8 )
        v-time-picker( v-model='tb2', landscape )

    // TIME PICKERS DARK

    h4.text-xs-right
      | # time pickers dark

    v-layout( row, wrap )
      v-flex.ma-3( md12, lg4 )
        v-time-picker( v-model='td1', dark )
      v-flex.ma-3( md12, lg8 )
        v-time-picker( v-model='td2', landscape, dark )

    // TIME PICKERS 24 HOURS FORMAT

    h4.text-xs-right
      | # time pickers - 24h format

    p.mb-0.px-4.text-xs-right
      | a time picker can be switched to 24hr format.

    v-layout( row, wrap )
      v-flex.ma-3( md12, lg4 )
        v-time-picker( v-model='tf1', dark, format="24hr" )
      v-flex.ma-3( md12, lg8 )

</template>

<script>
  export default {
    data () {
      return {
        b1: null,
        b2: null,
        d1: null,
        d2: null,
        tb1: null,
        tb2: null,
        td1: null,
        td2: null,
        tf1: null
      }
    }
  }
</script>

