<template lang="pug">

  v-container

    // https://api.nasa.gov/api.html#apod

    v-layout.mb-4( row )
      v-flex( xs12 )
        h3
          | Search NASA Images
        form( @submit.prevent="onSearch(query)" )
          v-text-field( v-model="query", label="Input term for search" )

    v-layout( row, wrap, v-if="collection" )
      v-flex( xs12 )
        v-card.mb-2( v-for="item in collection", :key="item" )
          v-card-media( :src="item.links[0].href", height="200px" )
          v-card-title( primary-title )
            article
              h3.headline.mb-0
                | {{ item.data[0].title }}
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
                  | {{ item.data[0].description }}

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
        collection: [],
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
            this.collection = response.data.collection.items.splice(0, 10)
          })
          .catch(error => {
            console.log(error)
          })
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
