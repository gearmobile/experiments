<template lang="pug">
  
  v-container

    v-layout
      v-flex( xs12 )
        v-btn( flat, dark )
          | normal button

    v-layout
      v-flex( xs12 )
        v-btn.btn--dark-flat-focused( dark, flat )
          | focused button

    v-layout
      v-flex( xs12 )
        v-btn.btn--dark-flat-pressed( dark, flat )
          | pressed button

</template>

<script>
  export default {
    //
  }
</script>

<style lang="stylus">
  //
</style>
