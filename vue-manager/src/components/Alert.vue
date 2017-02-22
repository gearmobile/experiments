<template>
  <div class="alert container">
    <div class="alert alert-warning" role="alert" v-if="alert">{{ alert }}</div>
  </div>
</template>

<script>
  export default {
    name: 'alert',
    data() {
      return {
        alert: '',
      };
    },
  };
</script>

<style scoped>
  /**/
</style>
