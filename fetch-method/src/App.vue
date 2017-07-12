<template lang="pug">
  #app
    ul.list
      li.list__unit( v-for="(image, index) in images", :key="image" )
        h3.list__caption {{ image.id }}: {{ image.title }}
        figure.list__item
          img.list__image( :src="image.thumbnailUrl", :alt="image.id" )
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        images: ''
      }
    },
    methods: {
      load () {
        const root = 'https://jsonplaceholder.typicode.com'
        fetch(root + '/photos')
          .then(response => {
            return response.json()
          })
          .then(data => {
            this.images = data.splice(0, 10)
          })
      }
    },
    created () {
      this.load()
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  .list {
    list-style-type: none;
    padding-left: 0;
    margin-left: 0;
  }
  .list__caption {
    text-transform: capitalize;
  }
  .list__unit {
    border: 1px solid rgba( 0,0,0, .6 );
    margin-bottom: 2rem;
    border-radius: .4rem;
    padding: 2rem 1rem;
  }
  .list__image {
    vertical-align: top;
  }
</style>
