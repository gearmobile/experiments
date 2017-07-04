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

            v-btn( flat )
              | normal button

            v-btn( flat, primary )
              | flat primary button

            v-btn( flat, disabled )
              | disabled button

    v-layout( mt-3 )

      v-flex( xs12 )
        v-card.secondary.elevation-0
          v-card-text

            v-btn( flat, dark )
              | normal button

            v-btn( flat, dark, primary )
              | primary button

            v-btn( flat, dark, disabled )
              | disabled button

    h4.text-xs-right.mt-3
      | #2 Raised

    v-layout

      v-flex( xs12 )
        v-card
          v-card-text
            
            v-btn( light )
              | normal button

            v-btn( light, disabled )
              | disabled button

            v-btn( dark, primary )
              | dark primary button

            v-btn( dark, error )
              | dark error button

            v-btn( dark, primary, disabled )
              | dark primary disabled button

    h4.text-xs-right.my-4
      | #3 Button Dropdown Variants

    v-layout

      v-flex( xs4 )
        v-card
          v-card-text
            p
              | Overflow
            v-select( :items="dropdown_font", overflow )

      v-flex( xs4 )
        v-card
          v-card-text
            p
              | Segmented
            v-select( :items="dropdown_icon", segmented )

      v-flex( xs4 )
        v-card
          v-card-text
            p
              | Editable
            v-select( :items="dropdown_edit", editable, item-value="text" )

    h4.text-xs-right.my-4
      | #4 Button Toggle

    v-layout( mb-3 )

      v-flex( xs6 )
        v-card
          v-card-text
            p
              | Exclusive
            v-btn-toggle( :items="toggle_options", v-model="toggle_exclusive" )

      v-flex( xs6 )
        v-card
          v-card-text
            p
              | Multiple
            v-btn-toggle( :items="toggle_options_multiple", v-model="toggle_multiple", multiple )

    v-layout( mb-3 )

      v-flex( xs6 )
        v-card
          v-card-text
            p
              | No Options Selected
            v-btn-toggle( :items="toggle_options", v-model="toggle_none" )

      v-flex( xs6 )
        v-card
          v-card-text
            p
              | One Option Selected
            v-btn-toggle( :items="toggle_options_multiple", v-model="toggle_one", multiple )

    v-layout

      v-flex( xs6 )
        v-card
          v-card-text
            p
              | Text Options
            v-btn-toggle( :items="toggle_text", v-model="text" )

      v-flex( xs6 )
        v-card
          v-card-text
            p
              | Text &amp; Icon Options
            v-btn-toggle( :items="toggle_text_icon", v-model="icon" )

    h4.text-xs-right.my-4
      | #5 Icon

    v-layout

      v-flex( xs6 )
        v-card
          v-card-text

            h4
              | normal state
            
            v-btn.pink--text( icon )
              v-icon
                | favorite

            v-btn.indigo--text( icon )
              v-icon
                | star

            v-btn.green--text( icon )
              v-icon
                | cached

            v-btn.orange--text( icon )
              v-icon
                | thumb_up

      v-flex( xs6 )
        v-card
          v-card-text

            h4
              | disabled state

            v-btn.pink--text( icon, disabled )
              v-icon
                | favorite

            v-btn.indigo--text( icon, disabled )
              v-icon
                | star

            v-btn.green--text( icon, disabled )
              v-icon
                | cached

            v-btn.orange--text( icon, disabled )
              v-icon
                | thumb_up

    h4.text-xs-right.my-4
      | #6 Floating

    v-layout

      v-flex( xs12 )
        v-card
          v-card-text.text-xs-center

            h5.text-xs-right
              | Floating buttons are round and usually contain an icon
            
            v-btn( fab, small, primary, dark )
              v-icon
                | remove

            v-btn.pink( fab, small, dark )
              v-icon
                | favorite

            v-btn.indigo( fab, dark )
              v-icon
                | add

            v-btn.teal( fab, dark )
              v-icon
                | list

            v-btn.cyan( fab, large, dark )
              v-icon
                | edit

            v-btn.purple( fab, large, dark )
              v-icon
                | android

    h4.text-xs-right.my-4
      | #7 Loaders

    v-layout

      v-flex( xs12 )
        v-card
          v-card-text.text-xs-center
            
            v-btn( dark, secondary, :loading="loading", :disabled="loading", @click.native="loader = 'loading'" )
              | accept terms

            v-btn.blue-grey( dark, :loading="loading1", :disabled="loading1", @click.native="loader = 'loading1'" )
              | upload
              v-icon( dark, right )
                | cloud_upload

    h4.text-xs-right.my-4
      | #8 Outline, Round, Block

    v-layout

      v-flex( xs4 )
        v-card
          v-card-text.text-xs-center
            v-btn.indigo--text( outline )
              | outline button

            v-btn.teal--text( icon, outline )
              v-icon
                | list

            v-btn.indigo--text( icon, outline, large )
              v-icon
                | edit

      v-flex( xs4 )
        v-card
          v-card-text.text-xs-center
            v-btn( dark, primary, round )
              | rounded button

      v-flex( xs4 )
        v-card
          v-card-text
            v-btn( primary, dark, block )
              | block button

</template>

<script>
  export default {
    data () {
      return {
        // LOADING BUTTONS
        loader: null,
        loading: false,
        loading1: false,
        // DROPDOWN BUTTONS GROUP
        dropdown: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' },
          { text: 'State 8' },
          { text: 'State 9' },
          { text: 'State 10' }
        ],
        dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
        dropdown_icon: ['list', 'favorite', 'delete'],
        dropdown_edit: [
          { text: '100%' },
          { text: '75%' },
          { text: '50%' },
          { text: '25%' },
          { text: '0%' }
        ],
        // TOGGLE EXCLUSIVE
        toggle_exclusive: 1,
        toggle_options: [
          { icon: 'format_align_left', value: 1 },
          { icon: 'format_align_center', value: 2 },
          { icon: 'format_align_right', value: 3 },
          { icon: 'format_align_justify', value: 4 }
        ],
        // TOGGLE MULTIPLE
        toggle_multiple: [1, 3],
        toggle_options_multiple: [
          { icon: 'format_bold', value: 1 },
          { icon: 'format_italic', value: 2 },
          { icon: 'format_underlined', value: 3 },
          { icon: 'format_color_fill', value: 4 }
        ],
        // TOGGLE NONE
        toggle_none: null,
        // TOOGLE ONE
        toggle_one: [1],
        // TOGGLE TEXT
        text: 3,
        toggle_text: [
          { text: 'Left', value: 1 },
          { text: 'Center', value: 2 },
          { text: 'Right', value: 3 },
          { text: 'Justify', value: 4 }
        ],
        // TOGGLE TEXT AND ICON
        icon: null,
        toggle_text_icon: [
          { text: 'Left', icon: 'format_align_left', value: 1 },
          { text: 'Center', icon: 'format_align_center', value: 2 },
          { text: 'Right', icon: 'format_align_right', value: 3 },
          { text: 'Justify', icon: 'format_align_justify', value: 4 }
        ]
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    }
  }
</script>
