<template>
  <section class="detail">
    <p>{{ title }}</p>
    <p>{{ $route.params.user }}</p>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'page user detail',
        btn: 'forward',
      };
    },
  };
</script>]

<style lang="scss" scoped>
  .detail {
    width: 100%;
    background-color: whitesmoke;
  }
</style>
