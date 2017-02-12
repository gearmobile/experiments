<template>
  <section class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="caption">{{ caption }}</h2>
        <button type="button" class="btn btn-primary" @click="goHome">{{ btnTitle }}</button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        caption: 'section duo',
        btnTitle: 'go home from duo',
      };
    },
    methods: {
      goHome() {
        this.$router.push('/');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    background-color: paleturquoise;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .caption {
    text-transform: capitalize;
    color: lightslategray;
  }
</style>
