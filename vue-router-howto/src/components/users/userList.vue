<template>
  <section class="user-list">
    <h3>{{ title }}</h3>
    <router-link tag="button" class="btn btn-primary" :to="{ name: 'user' }">to page start</router-link>
    <router-link tag="button" class="btn btn-primary" :to="{ name: 'userCard', params: { user: $route.params.user } }">to page user card</router-link>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        title: 'page user',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-list {
    border: 1px solid orangered;
    border-radius: 4px;
    padding: 20px 40px;
  }
</style>
