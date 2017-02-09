<template>
  <div class="block">
    <h1>{{ message }}</h1>
    <p>{{ duoProp }}</p>
  </div>
</template>

<script>
  export default {
    name: 'duo',
    data() {
      return {
        message: 'Component Duo',
      };
    },
    props: {
      duoProp: {
        type: String,
        default: 'component duo prop',
      },
    },
  };
</script>

<style lang="css" scoped>
  .block {
    width: 48%;
    height: 200px;
    float: left;
    background-color: palevioletred;
    margin: 1%;
  }
</style>
