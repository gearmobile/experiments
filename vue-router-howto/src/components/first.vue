<template>
  <section class="first">
    <h3>{{ title }}</h3>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'page first',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .first {
    border: 1px solid firebrick;
    border-radius: 4px;
    padding: 20px 40px;
  }
</style>
