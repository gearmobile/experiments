<template>
  <div class="row user">
    <div class="col-md-8 col-md-offset-2">
      <h2 class="page-header">{{ title }}</h2>
      <p>{{ loadID }}</p>
      <button class="btn btn-small btn-primary" @click="goHome">go back home</button>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'user component',
        loadID: this.$route.params.id,
      };
    },
    methods: {
      goHome() {
        this.$router.push({ path: '/' });
      },
    },
  };

</script>

<style lang="scss" scoped>
  .user {
    border: 1px solid #000;
    padding: 20px;
    background-color: palegreen;
  }
</style>
