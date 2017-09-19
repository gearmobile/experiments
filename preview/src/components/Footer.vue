<template lang="pug">
  footer.footer
    .container
      .columns
        .column.is-3
          a.title.is-5( href="#" )
            | voximplant
        .column.is-3.is-offset-6
          ul
            li Zingaya, Inc
            li 2225 East Bayshore Road, Palo Alto
            li CA 94303-3220
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
        //
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    padding: 2rem 0;
    background-color: transparent;
    border-top: 1px solid black;
  }
</style>

