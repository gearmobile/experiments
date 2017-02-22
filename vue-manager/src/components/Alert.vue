<template>
  <div class="alert container">
    <div v-if="alert" class="alert alert-warning alert-dismissible" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      {{ alert }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'alert',
    data() {
      return {
        //
      };
    },
    props: {
      alert: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style scoped>
  /**/
</style>
