<template lang="pug">
  #app.app
    .app__wrapper
      button.app__btn( type="button", @click="onGet()" )
        | get data
      button.app__btn( type="button", @click="onClear()" )
        | clear array of objects
      button.app__btn( type="button", @click="onReset()" )
        | clear objects
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
        images: [],
        order: {
          time: {
            title: null,
            price: 0
          },
          service: {
            title: null,
            price: 0
          },
          cert: {
            title: null,
            price: 0
          },
          shipping: {
            title: null,
            price: 0
          },
          // greeting: null,
          customer: {
            name: null,
            phone: null,
            email: null
          }
        }
      }
    },
    methods: {
      onGet () {
        const root = 'https://jsonplaceholder.typicode.com'
        fetch(root + '/photos')
          .then(response => {
            return response.json()
          })
          .then(data => {
            this.images = data.splice(0, 10)
          })
      },
      onClear () {
        this.images.find(el => {
          el.id = 0
          el.albumId = null
          el.title = ''
        })
      },
      onReset () {
        for (let key in this.order) {
          let item = this.order[key]
          item.price = 1
          item.title = 'title'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50
    margin-top 60px

  .app
    position relative

    &__wrapper
      position absolute
      top 1rem
      right 1rem

    &__btn
      cursor pointer
      display block
      margin-bottom .4rem

  .list
    list-style-type none
    padding-left 0
    margin-left 0

    &__caption
      text-transform capitalize

    &__unit
      border 1px solid rgba( 0,0,0, .6 )
      margin-bottom 2rem
      border-radius .4rem
      padding 2rem 1rem

    &__image
      vertical-align top


</style>
