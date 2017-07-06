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

    // MODAL

    h4.headline.text-xs-right
      | #3 modal

    p.text-xs-right
      | Similar to a Simple Dialog, except that it's not dismissed when touching outside.

    v-layout( row, justify-center )
      v-dialog( v-model="modal", persistent )
        v-btn( primary, dark, slot="activator" )
          | open modal
        v-card
          v-card-title
            h5.headline
              | use google's location service?
          v-card-text
            | Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
          v-card-actions
            v-spacer
            v-btn.green--text.darken-1( flat, @click.native="modal = false" )
              | diasgree
            v-btn.green--text.darken-1( flat, @click.native="modal = false" )
              | agree

    // FULLSCREEN

    h4.headline.text-xs-right
      | #4 fullscreen

    p.text-xs-right
      | Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens

    v-layout( row, justify-center )
      v-dialog( v-model="fullscreen", fullscreen, transition="v-dialog-bottom-transition", :overlay=false )
        v-btn( primary, dark, slot="activator" )
          | open fullscreen window
        v-card
          v-toolbar.primary( dark )
            v-btn( dark, icon, @click.native='fullscreen = false' )
              v-icon
                | close
            v-toolbar-title
              | settings
            v-spacer
            v-toolbar-items
              v-btn( dark, flat, @click.native='fullscreen = false' )
                | save
          v-list( three-line, subheader )
            v-subheader
              | user controls
            v-list-tile( avatar )
              v-list-tile-content
                v-list-tile-title
                  | content filtering
                v-list-tile-sub-title
                  | set the content filtering level to restrict appts that can be downloaded
            v-list-tile( avatar )
              v-list-tile-content
                v-list-tile-title
                  | password
                v-list-tile-sub-title
                  | require password for purchase or use password to restrict purchase
          v-divider
          v-list( three-line, subheader )
            v-subheader
              | general
            v-list-tile( avatar )
              v-list-tile-action
                v-checkbox
              v-list-tile-content
                v-list-tile-title
                  | notifications
                v-list-tile-sub-title
                  | notify me about updates to apps or games that i downloaded
            v-list-tile( avatar )
              v-list-tile-action
                v-checkbox
              v-list-tile-content
                v-list-tile-title
                  | sound
                v-list-tile-sub-title
                  | auto-update apps at any time. data charges may apply
            v-list-tile( avatar )
              v-list-tile-action
                v-checkbox
              v-list-tile-content
                v-list-tile-title
                  | auto-add widgets
                v-list-tile-sub-title
                  | automatically add home screen widgets


</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        dialog1: false,
        modal: false,
        fullscreen: false
      }
    }
  }
</script>

