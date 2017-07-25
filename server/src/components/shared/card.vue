<template lang="pug">
  .card
    .card__title
      | {{ card.title }}
    .card__text
      | {{ card.ip }}
</template>

<script>
  export default {
    name: 'card',
    props: {
      card: {
        type: Object,
        default: null
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .card
    padding 1rem
    display flex
    flex-direction column
    justify-content center
    align-content center
    border 1px solid #000

    &__title
      margin 0 0 1rem
      font-weight 700
</style>

