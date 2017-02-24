<template>
  <ul class="page-nav nav nav-pills nav-justified">
    <router-link role="presentation" tag="li" to="/" active-class="active" exact><a>{{ titleOne }}</a></router-link>
    <router-link role="presentation" tag="li" to="/second" active-class="active"><a>{{ titleTwo }}</a></router-link>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        titleOne: 'page one',
        titleTwo: 'page two',
      }
    }
  }
</script>

<style lang="scss">
  .page-nav {
    margin-bottom: 20px;
    & a {
      text-transform: capitalize;
    }
  }
</style>
