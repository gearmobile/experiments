<template>
  <section class="user-card">
    <h3>{{ title }}</h3>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'user card',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-card {
    border: 1px solid darkmagenta;
    border-radius: 4px;
    padding: 20px 40px;
  }
</style>
