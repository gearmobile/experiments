<template lang="pug">
  .card( :class="{ 'card--on': card.status === 'on', 'card--off': card.status === 'off' }" )
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
    padding .8rem
    margin .2rem
    display flex
    flex 1 1 calc( 100 / 6 )
    flex-direction column
    justify-content center
    align-content center
    border 1px solid #000

    &__title
      margin 0 0 1rem
      font-weight 700

    &--on
      background-color lightgreen

    &--off
      background-color salmon

</style>

