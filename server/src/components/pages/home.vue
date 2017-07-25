<template lang="pug">
  .wrapper
    .wrapper__item( v-for="(rack, index) in racks", :key="index" )
      h3.wrapper__item-title
        | {{ rack.title }}: {{ rack.id }}
      .wrapper__inner
        app-card( v-for="(node, index) in rack.nodes", :key="index", :card="node" )
</template>

<script>
  import axios from 'axios'
  import Card from '../shared/card.vue'
  const root = 'http://localhost:3000'

  export default {
    name: 'home',
    data () {
      return {
        racks: []
      }
    },
    components: {
      appCard: Card
    },
    methods: {
      initData () {
        axios.get(root + '/servers')
          .then(res => {
            this.racks = res.data
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
      flex 1 1 25%
      min-height 10rem
      border 1px solid #000
      border-radius .2rem
      display flex
      flex-direction column
      align-items center
      padding 1rem
      margin .4%

    &__item-title
      text-align center
      margin 0 0 1rem
      width 100%
      text-transform capitalize

    &__inner
      display flex
      flex-direction row
      flex-wrap wrap

</style>
