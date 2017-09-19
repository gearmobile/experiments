<template lang="pug">

  .container

    .columns
      .column( v-for="item in items", :key="item" )
        .notification.has-text-centered.is-primary
          p.title
            | {{ item }}
    
    .columns.is-centered
      .column.is-8
        .notification.is-success
          p.subtitle.has-text-centered.is-capitalized
            | centered

    .columns
        .column.is-4
          .notification
            .field
              .control
                input.input.is-info( type="text", placeholder="Primary input" )

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
  .input {
    border-width: 0 0 1px 0;
    border-color: transparent transparent #000 transparent;
    border-radius: 0;
  }
</style>
