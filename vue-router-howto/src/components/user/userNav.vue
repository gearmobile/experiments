<template>
  <section>
    <ul class="user-nav nav nav-pills nav-justified">
      <router-link active-class="active" tag="li" to="/duo" exact><a>{{ pageUno }}</a></router-link>
      <router-link active-class="active" tag="li" to="/duo/user" exact><a>{{ pageDuo }}</a></router-link>
      <router-link active-class="active" tag="li" to="/duo/user/edit"><a>{{ pageTre }}</a></router-link>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        pageUno: 'page user start',
        pageDuo: 'page user detail',
        pageTre: 'page user edit',
      };
    },
  };
</script>

<style lang="scss">
  .user-nav {
    margin-bottom: 20px;
    & a {
      text-transform: uppercase;
    }
  }
</style>
