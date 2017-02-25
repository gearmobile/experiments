<template>
  <section class="users">
    <p>{{ titke }}</p>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        titke: 'users page',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .users {
    background-color: paleturquoise;
  }
</style>
