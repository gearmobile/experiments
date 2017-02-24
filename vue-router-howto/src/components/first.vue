<template>
  <section class="first">
    <h3>{{ title }}</h3>
    <p>{{ id }}</p>
    <page-nav></page-nav>
    <page-start></page-start>
  </section>
</template>

<script>
  import pageNav from './pages/pageNav.vue';
  import pageStart from './pages/pageStart.vue';

  export default {
    data() {
      return {
        title: 'page first',
        id: this.$route.params.url,
      };
    },
    components: {
      pageNav,
      pageStart,
    },
    watch: {
      '$route' (to, from) {
        this.id = to.params.url;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .first {
    border: 1px solid firebrick;
    border-radius: 4px;
    padding: 20px 40px;
  }
</style>
