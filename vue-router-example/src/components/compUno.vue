<template>
  <!--<section class="container">-->
    <div class="row">
      <div class="col-md-12">
        <h2 class="caption">{{ caption }}</h2>
        <button type="button" class="btn btn-primary" @click="goHome">{{ btnTitle }}</button>
        <hr>
        <children-navigation></children-navigation>
        <router-view></router-view>
      </div>
    </div>
  <!--</section>-->
</template>

<script>
  import ChildsNav from './compUnoChilds/childsNav.vue';

  export default {
    data() {
      return {
        caption: 'section uno',
        btnTitle: 'go home from uno',
      };
    },
    methods: {
      goHome() {
        this.$router.push('/');
      }
    },
    components: {
      childrenNavigation: ChildsNav,
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    background-color: palegreen;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .caption {
    text-transform: capitalize;
    color: orangered;
  }
</style>
