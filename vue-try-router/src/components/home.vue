<template>
  <section class="home">
    <p>{{ titke }}</p>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        titke: 'home page',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    background-color: palegoldenrod;
  }
</style>
