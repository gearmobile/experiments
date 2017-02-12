<template>
  <div class="row">
    <div class="col-md-12">
      <h2 class="caption">{{ caption }}</h2>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        caption: 'child tre',
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