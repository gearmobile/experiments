<template lang="pug">

  // https://api.nasa.gov/api.html#apod

  v-layout( row )
    v-flex( xs12 )
      h4
        | APOD (Astronomy Picture of the Day)
      v-card
        v-card-media.white--text( :src="image.url", style="height: 400px" )
          v-container( fill-height, fluid )
            v-layout( fill-height )
              v-flex( xs12, align-end, flexbox )
                span.headline
                  | {{ image.title }}
        v-card-title
          article
            p.grey--text
              | {{ image.date }}
            p
              | {{ image.explanation }}

</template>

<script>
  import axios from 'axios'
  const key = 'E63VawPtEeRx6v2Mkzh2HqyeggvHL9dFPtctVcaN'

  export default {
    name: 'home',
    data () {
      return {
        image: null
      }
    },
    methods: {
      getImage () {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=' + key)
          .then(response => {
            console.log(response.data)
            this.image = response.data
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
