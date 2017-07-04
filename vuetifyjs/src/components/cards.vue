<template lang="pug">
  
  v-container( fluid )

    h2.text-xs-center
      | cards

    v-layout
      v-flex( xs12 )
        v-card
          v-card-media( :src="imgPath", height="500" )
          v-card-title
            div
              h3.headline.mb-0
                | Kangaroo Valley Safari
              p.mb-0
                | Located two hours south of Sydney in the
                br 
                | Southern Highlands of New South Wales, ...
          v-card-actions
            v-btn.orange--text( flat )
              | share
            v-btn.orange--text( flat )
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
      imgPath () {
        return require('../assets/desert.jpg')
      }
    }
  }
</script>
