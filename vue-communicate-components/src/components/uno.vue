<template>
  <section class="uno">
    <h2>{{ unoMessage }}</h2>
    <button type="button" @click="fireUno">fire uno</button>
  </section>
</template>

<script>
  import eventBus from '../main';
  
  export default {
    data() {
      return {
        unoMessage: 'uno component',
        unoMsgSend: 'message from uno component',
      };
    },
    methods: {
      fireUno() {
        eventBus.$emit('fromUnoComp', this.unoMsgSend);
      },
    },
  };
</script>

<style lang="css" scoped>
  .uno {
    background-color: mediumseagreen;
  }
</style>
