<template lang="pug">

  .container
    .columns
      .column( v-for="item in items", :key="item" )
        .notification.has-text-centered.is-primary
          p.title
            | {{ item }}

</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        items: [1, 2, 3, 4, 5]
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
