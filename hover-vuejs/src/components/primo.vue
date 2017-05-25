<template lang="pug">
  .alert( role="alert", @mouseover="onOver()", @mouseout="onOut()", :class="{ 'alert-success': isActive }" ) {{ msg }}
</template>

<script>
  export default {
    name: 'primo',
    data () {
      return {
        isActive: false,
        msg: 'Well done! You successfully read this important alert message'
      }
    },
    methods: {
      onOver () {
        this.isActive = true
      },
      onOut () {
        this.isActive = false
      }
    }
  }
</script>

<style scoped>
  .alert {
    border: 1px solid rgba( 0,0,0, .2 );
    cursor: pointer;
  }
</style>
