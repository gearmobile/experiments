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

            v-btn( primary, light )
              | primary button

    h4.text-xs-right.mt-3
      | #3 Button Dropdown

    v-layout

      v-flex( xs4 )
        v-card
          v-card-text
            v-btn-dropdown( label="State A", :options="dropdown" )

      v-flex( xs4 )
        v-card
          v-card-text
            v-btn-dropdown( label="State B", :options="dropdown.slice(0, 7)" )

      v-flex( xs4 )
        v-card
          v-card-text
            v-btn-dropdown( label="State C", :options="dropdown.slice(0, 4)", max-height="auto" )

    h4.text-xs-right.my-4
      | #4 Button Dropdown Variants

    v-layout

      v-flex( xs4 )
        v-card
          v-card-text
            p
              | Overflow
            v-btn-dropdown( :options="dropdown_font", overflow="overflow", max-height="auto" )

      v-flex( xs4 )
        v-card
          v-card-text
            p
              | Segmented
            v-btn-dropdown( :options="dropdown_icon", segmented="segmented" )

      v-flex( xs4 )
        v-card
          v-card-text
            p
              | Editable
            v-btn-dropdown( :options="dropdown_edit", max-height="auto", editable="editable" )

    h4.text-xs-right.my-4
      | #5 Button Toggle

    v-layout( mb-3 )

      v-flex( xs6 )
        v-card
          v-card-text
            p
              | Exclusive
            v-btn-toggle( :options="toggle_options", v-model="toggle_exclusive" )

      v-flex( xs6 )
        v-card
          v-card-text
            p
              | Multiple
            v-btn-toggle( :options="toggle_options_multiple", v-model="toggle_multiple", multiple )

    v-layout( mb-3 )

      v-flex( xs6 )
        v-card
          v-card-text
            p
              | No Options Selected
            v-btn-toggle( :options="toggle_options", v-model="toggle_none" )

      v-flex( xs6 )
        v-card
          v-card-text
            p
              | One Option Selected
            v-btn-toggle( :options="toggle_options_multiple", v-model="toggle_one", multiple )

    v-layout

      v-flex( xs6 )
        v-card
          v-card-text
            p
              | Text Options
            v-btn-toggle( :options="toggle_text", v-model="text" )

      v-flex( xs6 )
        v-card
          v-card-text
            p
              | Text &amp; Icon Options
            v-btn-toggle( :options="toggle_text_icon", v-model="icon" )

</template>

<script>
  export default {
    data () {
      return {
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
        dropdown_font: [
          { text: 'Arial' },
          { text: 'Calibri' },
          { text: 'Courier' },
          { text: 'Verdana' }
        ],
        dropdown_icon: [
          { action: 'list' },
          { action: 'favorite' },
          { action: 'delete' }
        ],
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
    }
  }
</script>
