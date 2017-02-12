<template>
  <section class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="caption">{{ caption }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        caption: 'child uno',
      };
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .caption {
    text-transform: capitalize;
    color: orangered;
  }
</style>
