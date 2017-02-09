<template>
  <section class="duo">
    <h2>{{ duoMessage }}</h2>
    <h2>{{ duoMsgChanged }}</h2>
  </section>
</template>

<script>
  import eventBus from '../main';
  
  export default {
    data() {
      return {
        duoMessage: 'duo component',
        duoMsgChanged: null,
      };
    },
    created() {
      eventBus.$on('fromUnoComp', (data) => {
        this.duoMsgChanged = data;
      });
    },
  };
</script>

<style lang="css" scoped>
  .duo {
    background-color: indianred;
  }
</style>
