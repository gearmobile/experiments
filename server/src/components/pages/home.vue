<template lang="pug">
  .wrapper
    .wrapper__item( v-for="(rank, index) in ranks", :key="index", :card="rank" )
      h3.wrapper__item-title
        | {{ rank.title }}
</template>

<script>
  import axios from 'axios'
  const root = 'http://localhost:3000'

  export default {
    name: 'home',
    data () {
      return {
        ranks: []
      }
    },
    methods: {
      initData () {
        axios.get(root + '/servers')
          .then(res => {
            this.ranks = res.data
          })
          .catch(err => console.log(err))
      }
    },
    created () {
      this.initData()
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    display flex
    flex-direction row
    flex-wrap wrap

    &__item
      flex 1 1 33%
      height 10rem
      border 1px solid #000
      border-radius .2rem
      display flex
      padding 1rem

    &__item-title
      text-align center
      margin 0 1rem
      width 100%

</style>
