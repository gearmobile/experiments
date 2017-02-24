<template>
  <section class="page-one">
    <p>{{ title }}</p>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'page one',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-one {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    padding: 10px;
    background-color: paleturquoise;
    & p {
      margin: 0 auto;
      text-transform: capitalize;
      font-size: 20px;
    }
  }
</style>
