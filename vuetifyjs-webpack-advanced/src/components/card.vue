<template lang="pug">
  
  v-container

    v-layout
      v-flex( xs12 )
        v-card.elevation-3
          v-card-text
            | {{ msg }}
    
    v-layout
      v-flex( xs12 )
        v-card.blue.white--text.mt-3.darken-1.elevation-4
          v-card-text
            | {{ msg }}

</template>

<script>
  export default {
    data () {
      return {
        msg: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>
