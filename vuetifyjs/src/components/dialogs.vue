<template lang="pug">
  
  v-container( fluid )

    h2.display-2.text-xs-center
      | dialogs

    // SIMPLE DIALOG

    h4.headline.text-xs-right
      | #1 simple dialogs

    p.text-xs-right
      | Choosing an option immediately commits the option and closes the menu. Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog.

    v-layout( row, justify-center, style="position: relative" )
      v-dialog( lazy, absolute, v-model="dialog" )
        v-btn( dark, primary, slot="activator" )
          | open dialog
        v-card
          v-card-title
            h5.headline
              | use google's location service?
          v-card-text
            | Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          v-card-actions
            v-spacer
            v-btn.green--text.darken-1( flat, @click.native="dialog = false" )
              | diasgree
            v-btn.green--text.darken-1( flat, @click.native="dialog = false" )
              | agree

    // WITHOUT ACTIVATOR

    h4.headline.text-xs-right
      | #2 without activator

    p.text-xs-right
      | If for some reason you are unable to use the <strong>activator slot</strong>, be sure to add the <code>.stop</code> modifier to the event that triggers the dialog.

    v-layout( row, justify-center )
      v-btn( dark, primary, @click.native.stop="dialog1 = true" )
        | open dialog
      v-dialog( v-model="dialog1" )
        v-card
          v-card-title
            h5.headline
              | use google's location service?
          v-card-text
            | Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          v-card-actions
            v-spacer
            v-btn.green--text.darken-1( flat, @click.native="dialog1 = false" )
              | diasgree
            v-btn.green--text.darken-1( flat, @click.native="dialog1 = false" )
              | agree

</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        dialog1: false
      }
    }
  }
</script>

