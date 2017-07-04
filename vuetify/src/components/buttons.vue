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
        ]
      }
    }
  }
</script>
