<template lang="pug">
  
  v-container( fluid )

    h2.text-xs-center
      | cards

    h4.text-xs-right.mt-3
      | #1 Basic

    v-layout
      v-flex( xs12 )
        v-card
          v-card-text
            | {{ card_text }}

    v-layout
      v-flex( xs12 )
        v-card.mt-3.white--text.teal.text-xs-right
          v-card-text
            | {{ card_text }}

    h4.text-xs-right.mt-4
      | #2 Title and Actions

    h6.text-xs-right.mb-4
      | You can add both a <span class="accent">title bar</span> and an <span class="accent">actions row</span> to cards

    v-layout
      v-flex( xs12 )
        v-card
          
          // row one
          v-card-row.green.darken-1
            v-card-title
              span.white--text
                | marriot rewards
            v-spacer
            section
              v-menu#marriot( bottom, left, origin="top right" )
                v-btn.white--text( icon="icon", slot="activator" )
                  v-icon
                    | more_vert
                v-list
                  v-list-item
                    v-list-tile
                      v-list-tile-title
                        | never show rewards
                  v-list-item
                    v-list-tile
                      v-list-tile-title
                        | remove card
                  v-list-item
                    v-list-tile
                      v-list-tile-title
                        | send feedback
          
          // row two
          v-card-text
            v-card-row( height="75px" )
              v-icon.mr-5( dark )
                | card_membership
              section
                section
                  | Membership Number
                section
                  <strong>113241423</strong>
          
          v-divider
          
          // row three
          v-card-row( actions )
            v-btn.green--text.darken-1( flat )
              | view email

    h4.text-xs-right.mt-3
      | #3 Picture

    h6.text-xs-right.mb-4
      | The v-card and v-card-row can both have a background image.

    v-layout
      v-flex( xs12 )
        v-card

          v-card-row.blue-grey.darken-1
            v-card-title
              span.white--text
                | Visit Space
              v-spacer
              v-menu#space( bottom, left, origin='top right', transition='v-scale-transition' )
                v-btn.white--text( icon='icon', slot='activator' )
                  v-icon
                    | more_vert
                v-list
                  v-list-item
                    v-list-tile
                      v-list-tile-title
                        | remove card
                  v-list-item
                    v-list-tile
                      v-list-tile-title
                        | send feedback
          // card row with background image
          v-card-row( img=path, height='300px' )

          v-card-text.blue-grey.darken-3.white--text
            div( v-text='card_text' )

          v-card-row.blue-grey.darken-1.mt-0( actions )
            v-btn.white--text( flat )
              | get started
            v-spacer
            v-btn( icon )
              v-icon.white--text
                | explore


</template>

<script>
  export default {
    data () {
      return {
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    },
    computed: {
      path () {
        return require('../assets/space.jpg')
      }
    }
  }
</script>
