<template lang="pug">
  v-app( light )
    v-container
      v-layout( row )
        v-flex( xs12 )
          h2
            | routing
      v-layout( row )
        v-flex( xs12 )
          v-toolbar
            v-toolbar-title
              router-link( to="/" )
                | home
            v-spacer
            v-toolbar-items
              v-btn( flat, to="/user" )
                | users
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
