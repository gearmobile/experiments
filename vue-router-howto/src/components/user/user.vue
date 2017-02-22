<template>
  <section class="row">
    <h3 class="page-header">user subcomponent</h3>
    <app-user-nav></app-user-nav>
  </section>
</template>

<script>
  import appUserNav from './userNavigation.vue';

  export default {
    data() {
      return {
        //
      };
    },
    components: {
      appUserNav,
    },
  };
</script>
