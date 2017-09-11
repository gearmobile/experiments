<template lang="pug">

  v-container

    // https://api.nasa.gov/api.html#apod

    v-layout.mb-2( row, wrap )
      v-flex( xs12 )
        h3
          | Search NASA Images
        form( @submit.prevent="onSearch(query)" )
          v-layout( row, wrap )
            v-flex.pa-2( xs12, sm6 )
              v-text-field( v-model.trim="query", label="Input Name of Image" )
            v-flex.pa-2( xs12, sm6 )
              v-text-field( v-model.trim="quantity", label="Input Quantity of Images" )
    
    v-layout.mb-4( row )
      v-flex( xs12 )
        v-card-actions
          v-spacer
          v-btn.primary--text( flat, @click.native="onSearch(query)" )
            | send request
          v-btn.primary--text( flat, @click.native="onClear()" )
            | clear form

    v-layout( row, wrap, v-if="cards" )
      v-flex.pa-2.mb-2( xs12, sm6, md4, v-for="card in cards", :key="card.data[0].title" )
        v-card( style="height: 100%" )
          v-card-media( :src="card.links[0].href", height="200px" )
          v-card-title( primary-title )
            article
              h3.headline.mb-0
                | {{ card.data[0].title }}
          v-card-actions
            v-btn.primary--text( flat, @click.native="card.show = !card.show" )
              | show more
            v-spacer
            v-btn( icon )
              v-icon
                | {{ card.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
          v-slide-y-transition
            v-card-text( v-show="card.show" )
                p.mb-0
                  | {{ card.data[0].description }}

</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  const images = 'https://images-api.nasa.gov/'

  export default {
    name: 'home',
    data () {
      return {
        query: null,
        quantity: 10,
        cards: [],
        show: false
      }
    },
    methods: {
      onSearch (value) {
        axios.get(images + 'search?q=' + value + '&media_type=image')
          .then(response => {
            console.log(response.data.collection.items)
            this.cards = response.data.collection.items.splice(0, this.quantity)
            for (let key in this.cards) {
              Vue.set(this.cards[key], 'show', false)
            }
          })
          .catch(error => {
            console.log(error)
          })
      },
      onClear () {
        this.query = ''
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
