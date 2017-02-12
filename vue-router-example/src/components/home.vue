<template>
  <section class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="caption">{{ caption }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        caption: 'home section',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .caption {
    text-transform: uppercase;
    font-size: 30px;
    color: lightslategrey;
  }
</style>
