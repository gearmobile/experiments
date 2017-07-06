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

    p.mb-0.px-4.text-xs-right
      | When integrating a picker into a <code>v-text-field</code>, it is recommended to use the readonly prop. This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.

    // TIME PICKERS BASIC

    h4.text-xs-right.mt-4
      | #4 time pickers basic

    v-layout( row, wrap )
      v-flex.ma-3( md12, lg4 )
        v-time-picker( v-model='tb1' )
      v-flex.ma-3( md12, lg8 )
        v-time-picker( v-model='tb2', landscape )

    // TIME PICKERS DARK

    h4.text-xs-right
      | #5 time pickers dark

    v-layout( row, wrap )
      v-flex.ma-3( md12, lg4 )
        v-time-picker( v-model='td1', dark )
      v-flex.ma-3( md12, lg8 )
        v-time-picker( v-model='td2', landscape, dark )

    // TIME PICKERS 24 HOURS FORMAT

    h4.text-xs-right
      | #6 time pickers - 24h format

    p.mb-0.px-4.text-xs-right
      | a time picker can be switched to 24hr format.

    v-layout( row, wrap )
      v-flex.ma-3( md12, lg4 )
        v-time-picker( v-model='tf1', dark, format="24hr" )
      v-flex.ma-3( md12, lg8 )

    // #7 DATE PICKERS - IN DIALOG AND MENU

    h4.text-xs-right
      | #7 date pickers - in dialog and menu

    p.mb-0.px-4.text-xs-right
      | When integrating a picker into a <code>v-text-field</code>, it is recommended to use the <strong>readonly</strong> prop. This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.

    v-layout( row, wrap, pa-3 )
      // picker in menu
      v-flex( xs12, sm6 )
        v-menu( lazy, :close-on-content-click="false", v-model="ta2model", transition="v-scale-transition", offset-y, :nudge-left="40" )
          v-text-field( slot='activator', label='picker in menu', prepend-icon='access_time', readonly )
          v-time-picker( v-model='ta2', autosave )
      // picker in dialog
      v-flex( xs12, sm6 )
        v-dialog( persistent, lazy, v-model='ta1model' )
          v-text-field( slot='activator', label='picker in dialog', prepend-icon='access_time', v-model='ta1', readonly )
          v-time-picker( v-model='ta1', actions, format='24hr' )
            template( scope='{ save, cancel }' )
              v-card-actions
                v-spacer
                v-btn( flat, primary, @click.native='cancel()' )
                  | cancel
                v-btn( flat, primary, @click.native='save()' )
                  | save

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
        tf1: null,
        ta1: null,
        ta1model: false,
        ta2: null,
        ta2model: false
      }
    }
  }
</script>

