<template lang="pug">
  v-app
    v-container
      v-layout( row )
        v-flex( xs12 )
          v-layout
            v-flex( xs12, md4 )
              v-subheader
                | primo input
            v-flex( xs12, md8 )
              v-text-field( single-line, prepend-icon="remove", append-icon="add", :append-icon-cb="() => primo += 1", :prepend-icon-cb="() => primo -= 1", v-model="primo", hide-details )
          v-layout
            v-flex( xs12, md4 )
              v-subheader
                | secondo input
            v-flex( xs12, md8 )
              v-text-field( single-line, prepend-icon="remove", append-icon="add", :append-icon-cb="() => secondo += 1", :prepend-icon-cb="() => secondo -= 1", v-model="secondo", hide-details )
</template>

<script>
  export default {
    data () {
      return {
        primo: null,
        secondo: null
      }
    },
    methods: {
      onAdd (value) {
        value += 1
      },
      onRemove (value) {
        console.log(value)
        value -= 1
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'

  .icon
    cursor pointer !important
    background-color teal !important
    color white !important

    &:hover
      background-color #26a69a !important
      transition background-color .2s

  .input-group__prepend-icon
    justify-content center !important

  .input-group__details
    display none

  .input-group__input
    padding .2rem !important
    border .1rem solid teal

    & input
      padding 0 .6rem
      text-align center
      color #009688 !important


</style>
