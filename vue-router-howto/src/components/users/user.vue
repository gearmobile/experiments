<template>
  <section class="user">
    <h3>{{ title }}</h3>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'user page',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user {
    border: 1px solid orangered;
    border-radius: 4px;
    padding: 20px 40px;
  }
</style>
