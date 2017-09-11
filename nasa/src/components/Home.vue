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
              v-text-field( v-model="query", label="Input name of image" )
            v-flex.pa-2( xs12, sm6 )
              v-text-field( v-model="quantity", label="Input quantity of images" )
    
    v-layout.mb-4( row )
      v-flex( xs12 )
        v-card-actions
          v-spacer
          v-btn.primary--text( flat, @click.native="onSearch(query)" )
            | send request
          v-btn.primary--text( flat, @click.native="onClear()" )
            | clear form

    v-layout( row, wrap, v-if="cards" )
      v-flex.pa-2.mb-2( xs12, sm6, md4 v-for="card in cards", :key="card" )
        v-card( style="height: 100%" )
          v-card-media( :src="card.links[0].href", height="200px" )
          v-card-title( primary-title )
            article
              h3.headline.mb-0
                | {{ card.data[0].title }}
          v-card-actions
            v-btn.primary--text( flat, @click.native="onShow()" )
              | show more
            v-spacer
            v-btn( icon, @click.native="onShow()" )
              v-icon
                | {{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
          v-slide-y-transition
            v-card-text( v-show="show" )
                p.mb-0
                  | {{ card.data[0].description }}

    //- v-layout( row )
    //-   v-flex( xs12 )
    //-     h4
    //-       | APOD (Astronomy Picture of the Day)
    //-     v-card
    //-       v-card-media.white--text( :src="image.url", style="height: 400px" )
    //-         v-container( fill-height, fluid )
    //-           v-layout( fill-height )
    //-             v-flex( xs12, align-end, flexbox )
    //-               span.headline
    //-                 | {{ image.title }}
    //-       v-card-title
    //-         article
    //-           p.grey--text
    //-             | {{ image.date }}

    //-       v-slide-y-transition
    //-         v-card-text( v-show="show" )
    //-           p
    //-             | {{ image.explanation }}

</template>

<script>
  import axios from 'axios'
  // const apod = 'https://api.nasa.gov/planetary/apod'
  const images = 'https://images-api.nasa.gov/'
  // const key = 'E63VawPtEeRx6v2Mkzh2HqyeggvHL9dFPtctVcaN'

  export default {
    name: 'home',
    data () {
      return {
        // image: null,
        query: null,
        quantity: 10,
        cards: [],
        show: false
      }
    },
    methods: {
      onShow () {
        this.show = !this.show
      },
      // getImage () {
      //   axios.get(apod + '?api_key=' + key)
      //     .then(response => {
      //       console.log(response.data)
      //       this.image = response.data
      //     })
      //     .catch(error => {
      //       console.log(error)
      //     })
      // },
      onSearch (value) {
        axios.get(images + 'search?q=' + value + '&media_type=image')
          .then(response => {
            console.log(response.data.collection.items)
            this.cards = response.data.collection.items.splice(0, this.quantity)
          })
          .catch(error => {
            console.log(error)
          })
      },
      onClear () {
        this.query = ''
      }
    },
    created () {
      this.getImage()
    }
  }
</script>

<style scoped>
  /**/
</style>
