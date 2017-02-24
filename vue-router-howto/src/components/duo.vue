<template>
  <section class="duo">
    <p class="duo-title">{{ title }}</p>
    <button class="btn btn-primary" @click="goBack">{{ btn }}</button>
    <user-nav></user-nav>
    <router-view></router-view>
  </section>
</template>

<script>
  import userNav from './user/userNav.vue';

  export default {
    data() {
      return {
        title: 'page duo',
        btn: 'go back home',
      };
    },
    methods: {
      goBack() {
        this.$router.push({ name: 'uno' });
      }
    },
    components: {
      userNav,
    },
  };
</script>]

<style lang="scss" scoped>
  .duo {
    border: 1px solid rebeccapurple;
    background-color: palegoldenrod;
    flex-direction: column;
    & .duo-title {
      padding-bottom: 10px;
    }
  }
</style>
