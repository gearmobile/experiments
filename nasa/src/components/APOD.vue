<template lang="pug">

  v-container

    v-layout( row )
      v-flex( xs12 )
        h3.text-xs-center
          | APOD
        p
          | One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video.

    v-layout( row )
      v-flex( xs12 )
        v-btn.secondary( block, @click.native="getAPOD()" )
          | show Astronomy Picture of the Day

    v-slide-y-transition
      v-layout( row, v-if="progress" )
        v-flex.text-xs-center.pt-4.pb-4( xs12 )
          v-progress-circular.primary--text( indeterminate, :size="70", :width="3" )

    v-slide-y-transition
      v-layout( row, v-if="image" )
        v-flex( xs12 )
          v-card
            v-card-media( v-if="image.media_type === 'image'", :src='image.url', height="200px" )
            //- video( width="320", height="240", controls )
            //-   source( :src="image.url" )
            iframe( v-if="image.media_type === 'video'", :src="image.url", width="100%", height="400", webkitallowfullscreen, mozallowfullscreen, allowfullscreen )
            v-card-title
              h4.mb-0
                | {{ image.title }}
            v-card-text
              article
                p.grey--text.mb-2
                  | {{ image.date }}
                p
                  | {{ image.explanation }}

</template>

<script>
  import axios from 'axios'
  const key = 'E63VawPtEeRx6v2Mkzh2HqyeggvHL9dFPtctVcaN'
  const url = 'https://api.nasa.gov/planetary/apod'

  export default {
    data () {
      return {
        image: '',
        progress: false
      }
    },
    methods: {
      getAPOD () {
        this.progress = true
        axios.get(url + '?api_key=' + key)
          .then(response => {
            console.log(response.data)
            this.image = response.data
            this.progress = false
          })
          .catch(error => {
            console.log(error)
            this.progress = false
          })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>

