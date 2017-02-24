<template>
  <section>
    <ul class="page-nav nav nav-pills nav-justified">
      <router-link active-class="active" tag="li" to="/" exact><a>{{ pageUno }}</a></router-link>
      <router-link active-class="active" tag="li" to="/duo"><a>{{ pageDuo }}</a></router-link>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        pageUno: 'page one',
        pageDuo: 'page two',
        //
      };
    },
  };
</script>

<style lang="scss">
  .page-nav {
    margin-bottom: 20px;
    & a {
      text-transform: uppercase;
    }
  }
</style>
