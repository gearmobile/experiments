<template>
  <section class="page-two">
    <p>{{ title }}</p>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'page two',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-two {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    padding: 10px;
    background-color: palevioletred;
    & p {
      margin: 0 auto;
      text-transform: capitalize;
      font-size: 20px;
    }
  }
</style>
