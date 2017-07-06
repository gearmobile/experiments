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

    // FORM

    h4.headline.text-xs-right
      | #5 form

    p.text-xs-right
      | just a simple example of a form in a dialog

    v-layout( row, justify-center )
      v-dialog( v-model='form', persistent )
        v-btn( primary, dark, slot="activator" )
          | open form dialog
        v-card
          v-card-title
            span.headline
              | user profile
          v-card-text
            v-text-field( label="email", required )
            v-text-field( label='password', required, type='password' )
            v-text-field( label='first name', required )
            v-text-field( label='middle name', required, hint='example of helper text only on focus' )
            v-text-field( label='last name', required, hint='example of persistent helper text', persistent-hint )
            v-select( label='age', required, :items='age' )
            v-select( label='interests', multiple, autocomplete, chips, :items='hobbys' )
            small
              | *indicates required field
          v-card-actions
            v-spacer
            v-btn.blue--text.darken-1( primary, flat, @click.native='form = false' )
              | close
            v-btn.blue--text.darken-1( primary, flat, @click.native='form = false' )
              | save

    // SCROLLABLE

    h4.headline.text-xs-right
      | #6 scrollable

    p.text-xs-right
      | Example of a dialog with scrollable content.

    v-layout( row, justify-center )
      v-dialog( v-model='scrollable', scrollable )
        v-btn( primary, dark, slot='activator' )
          | open scrollable window
        v-card
          v-card-title
            | select country
          v-divider
          v-card-text( style='height: 300' )
            v-radio( v-for='(item, index) in countries', :key='index', :label='item', :value='item', v-model='country' )
          v-divider
          v-card-actions
            v-btn.green--text.darken-2( flat, @click.native='scrollable = false' )
              | close
            v-btn.green--text.darken-2( flat, @click.native='scrollable = false' )
              | save

</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        dialog1: false,
        modal: false,
        fullscreen: false,
        form: false,
        age: ['0-17', '18-29', '30-54', '54+'],
        hobbys: ['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump'],
        scrollable: false,
        country: null,
        countries: [
          'bahamas',
          'bahrain',
          'bangladesh',
          'barbados',
          'belarus',
          'belgium',
          'belize',
          'benin',
          'bhutan',
          'bolivia',
          'bosnia',
          'botswana',
          'brazil',
          'brunei',
          'bulgaria',
          'burkina',
          'burma',
          'burundi'
        ]
      }
    }
  }
</script>

