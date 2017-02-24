<template>
  <section class="edit">
    <p>{{ title }}</p>
    <p>{{ $route.params.user }}</p>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'page user edit',
      };
    },
  };
</script>]

<style lang="scss" scoped>
  .edit {
    width: 100%;
    background-color: whitesmoke;
  }
</style>
