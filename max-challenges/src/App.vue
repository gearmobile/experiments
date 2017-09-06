<template lang="pug">
  
  v-app( light )
    v-container
      v-layout( row )
        v-flex( xs12 )
          router-view

</template>

<script>
  export default {
    data () {
      return {
        //
      }
    }
  }
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
