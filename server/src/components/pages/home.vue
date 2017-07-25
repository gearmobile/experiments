<template lang="pug">
  .wrapper
    .wrapper__item( v-for="(rank, index) in ranks", :key="index" )
      h3.wrapper__item-title
        | {{ rank.title }}
      .wrapper__inner
        app-card( v-for="(node, index) in rank.nodes", :key="index", :card="node" )
</template>

<script>
  import axios from 'axios'
  import Card from '../shared/card.vue'
  const root = 'http://localhost:3000'

  export default {
    name: 'home',
    data () {
      return {
        ranks: []
      }
    },
    components: {
      appCard: Card
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
      flex 1 1 30%
      height 10rem
      border 1px solid #000
      border-radius .2rem
      display flex
      flex-direction column
      align-items center
      padding 1rem
      margin 1%

    &__item-title
      text-align center
      margin 0 0 1rem
      width 100%

    &__inner
      display flex
      flex-direction row
      flex-wrap wrap

</style>
