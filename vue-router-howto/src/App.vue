<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="id">{{ currID }}</div>
          <page-nav></page-nav>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import pageNav from './components/pagesNav.vue';

  export default {
    name: 'app',
    data() {
      return {
        currID: this.$route.params.user,
      };
    },
    watch: {
      '$route'(to, from) {
        this.currID = to.params.user;
      },
    },
    components: {
      pageNav,
    },
  };
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    position: relative;
    & section {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100px;
    }
    & p {
      margin: 0 auto;
      text-transform: capitalize;
      font-size: 20px;
      font-weight: 700;
    }
    & .id {
      position: absolute;
      top: 20px;
      right: -100px;
    }
  }
</style>
