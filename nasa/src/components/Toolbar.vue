<template lang="pug">
  v-layout( row )
    v-flex( xs12 )
      v-toolbar.primary( dark )
        v-toolbar-title
          span( to="/", style="cursor: pointer" )
            | NASA
        v-spacer
        v-toolbar-items
          v-btn( flat, to="/apod" )
            | APOD
</template>

<script>
  export default {
    //
  }
</script>

<style lang="stylus" scoped>
  //
</style>

