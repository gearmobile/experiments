<template lang="pug">
  v-app.app
    v-container
      v-layout( row )
        v-flex( xs12 )
          
          v-layout( row, wrap )
            v-flex( xs12, md4 )
              v-subheader.app__title
                | primo input
            v-flex( xs12, md8 )
              v-text-field(
                single-line,
                prepend-icon="remove",
                append-icon="add",
                :append-icon-cb="(() => increment('primo'))",
                :prepend-icon-cb="(() => decrement('primo'))",
                v-model="primo",
                hide-details,
                disabled="primoStatus"
              )
          
          v-layout( row, wrap )
            v-flex( xs12, md4 )
              v-subheader.app__title
                | secondo input
            v-flex( xs12, md8 )
              v-text-field(
                single-line,
                prepend-icon="remove",
                append-icon="add",
                :append-icon-cb="(() => increment('secondo'))",
                :prepend-icon-cb="(() => decrement('secondo'))",
                v-model="secondo",
                hide-details,
                disabled="secondoStatus"
              )
</template>

<script>
  export default {
    data () {
      return {
        primo: null,
        secondo: null,
        primoStatus: false,
        secondoStatus: false
      }
    },
    methods: {
      increment (prop) {
        if (this[prop] < 10) {
          this[prop] = (this[prop] || 0) + 1
        } else {
          this.primoStatus = true
        }
      },
      decrement (prop) {
        if (this[prop] > 0) {
          this[prop] = (this[prop] || 0) - 1
        } else {
          this.secondoStatus = true
        }
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

  .app

    &__title
      text-transform capitalize


</style>
