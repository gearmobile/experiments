<template>
  <section class="user-card">
    <h3>{{ title }}</h3>
    <router-link tag="button" class="btn btn-primary" :to="{ name: 'userList', params: { user: $route.params.user } }">to page user</router-link>
    <router-link tag="button" class="btn btn-primary" :to="{ name: 'userEdit', params: { user: $route.params.user } }">to page user card edit</router-link>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'page user card',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-card {
    border: 1px solid darkmagenta;
    border-radius: 4px;
    padding: 20px 40px;
  }
</style>
