<template>
  <div class="row home">
    <div class="col-md-8 col-md-offset-2">
      <h2 class="page-header">{{ title }}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'home component',
      };
    },
  };
</script>

<style lang="scss" scoped>
  .home {
    border: 1px solid #000;
    padding: 20px;
    background-color: paleturquoise;
  }
</style>
