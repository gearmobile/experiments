<template>
  <ul class="user-nav nav nav-pills nav-justified">
    <router-link role="presentation" tag="li" to="/second" active-class="active" exact><a>{{ titleOne }}</a></router-link>
    <router-link role="presentation" tag="li" to="/second/user" active-class="active" exact><a>{{ titleTwo }}</a></router-link>
    <router-link role="presentation" tag="li" to="/second/user/card" active-class="active" exact><a>{{ titleThree }}</a></router-link>
    <router-link role="presentation" tag="li" to="/second/user/card/edit" active-class="active"><a>{{ titleFour }}</a></router-link>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        titleOne: 'page start',
        titleTwo: 'page user',
        titleThree: 'page user card',
        titleFour: 'page user card edit',
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-nav {
    margin-bottom: 20px;
    & a {
      text-transform: capitalize;
    }
  }
</style>