<template>
  <section>
    <h1>{{ message }}</h1>
  </section>
</template>

<script>
  export default {
    name: 'uno',
    data() {
      return {
        message: 'Component Uno',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
