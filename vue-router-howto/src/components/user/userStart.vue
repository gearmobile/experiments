<template>
  <section class="start">
    <p>{{ title }}</p>
    <p>{{ $route.params.user }}</p>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'page user start',
      };
    },
  };
</script>]

<style lang="scss" scoped>
  .start {
    width: 100%;
    background-color: whitesmoke;
  }
</style>
