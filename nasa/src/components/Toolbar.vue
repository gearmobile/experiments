<template lang="pug">
  v-layout( row )
    v-flex( xs12 )
      v-toolbar.primary( dark )
        v-toolbar-title
          span( to="/", style="cursor: pointer" )
            | nasa
        v-spacer
        v-toolbar-items
          v-btn( flat, to="/apod" )
            | apod
          v-btn( flat, to="/epic" )
            | epic
</template>

<script>
  export default {
    //
  }
</script>

<style lang="stylus" scoped>
  //
</style>

