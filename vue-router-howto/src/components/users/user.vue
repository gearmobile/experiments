<template>
  <section class="user">
    <h3>{{ title }}</h3>
    <router-link tag="button" class="btn btn-primary" :to="'/second/' + $route.params.user">to page user</router-link>
    <router-link tag="button" class="btn btn-primary" :to="'/second/' + $route.params.user + '/card'">to page user card</router-link>
    <router-link tag="button" class="btn btn-primary" :to="'/second/' + $route.params.user + '/card/edit'">to page user card edit</router-link>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'page start',
      };
    },
  };
</script>

<style lang="scss" scoped>
  .user {
    border: 1px solid orangered;
    border-radius: 4px;
    padding: 20px 40px;
  }
</style>
