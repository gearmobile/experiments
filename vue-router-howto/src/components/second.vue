<template>
  <section class="second">
    <h3>{{ title }}</h3>
    <router-view></router-view>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'page second',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .second {
    border: 1px solid blue;
    border-radius: 4px;
    padding: 20px 40px;
  }
</style>
