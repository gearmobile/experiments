<template>
  <section class="second">
    <h3>{{ title }}</h3>
    <p>{{ user }}</p>
    <user-nav></user-nav>
    <router-view></router-view>
  </section>
</template>

<script>
  import userNav from './users/userNav.vue';

  export default {
    data() {
      return {
        title: 'page second',
      }
    },
    components: {
      userNav,
    },
    computed: {
      user() {
        return this.$route.params.userID ? this.$route.params.userID : 'nothing';
      },
    },
  }
</script>

<style lang="scss" scoped>
  .second {
    border: 1px solid blue;
    border-radius: 4px;
    padding: 20px 40px;
  }
</style>
