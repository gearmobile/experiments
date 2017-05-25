<template lang="pug">
  .box.rounded( @mouseover="onOver()", @mouseout="onOut()" ) {{ msg }}
    .box-overlay.rounded( :class="{ 'box-overlay--active': isActive }", @click="onClick()" )
      i.fa.fa-refresh.fa-4x.box-icon( aria-hidden="true" )
</template>

<script>
  export default {
    name: 'secondo',
    data () {
      return {
        msg: 'Well done! You successfully read this important alert message',
        isActive: false
      }
    },
    methods: {
      onOver () {
        this.isActive = true
      },
      onOut () {
        this.isActive = false
      },
      onClick () {
        console.log('clicked')
      }
    }
  }
</script>

<style scoped>
  .box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 10rem;
    border: 1px solid rgba( 0,0,0, .2 );
    cursor: pointer;
  }
  .box-overlay {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba( 0,0,0, .6 );
    z-index: 2;
    width: 100%;
    height: 100%;
  }
  .box-overlay--active {
    display: block;
  }
  .box-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white
  }
</style>
