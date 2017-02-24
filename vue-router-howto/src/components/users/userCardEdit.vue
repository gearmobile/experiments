<template>
  <section class="user-edit">
    <h3>{{ title }}</h3>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'user card edit',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-edit {
    border: 1px solid blueviolet;
    border-radius: 4px;
    padding: 20px 40px;
  }
</style>
