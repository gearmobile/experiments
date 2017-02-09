<template>
  <div class="block">
    <h1>{{ message }}</h1>
    <p>{{ unoProp }}</p>
    <button type="button" @click="chgParProp">change parent prop</button>
  </div>
</template>

<script>
  export default {
    name: 'uno',
    data() {
      return {
        message: 'Component Uno',
        unoValue: 'changed from component uno',
      };
    },
    props: {
      unoProp: {
        type: String,
        default: 'uno prop',
      },
    },
    methods: {
      chgParProp() {
        this.$emit('unoChgPar', this.unoValue);
      },
    },
  };
</script>

<style lang="css" scoped>
  .block {
    width: 48%;
    height: 200px;
    float: left;
    background-color: lightseagreen;
    margin: 1%;
  }
</style>
