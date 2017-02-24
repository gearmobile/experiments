<template>
  <ul class="page-nav nav nav-pills nav-justified">
    <router-link role="presentation" tag="li" to="/one/uno" active-class="active" exact><a>page one</a></router-link>
    <router-link role="presentation" tag="li" to="/two/duo" active-class="active"><a>page two</a></router-link>
  </ul>
</template>

<style lang="scss" scoped>
  .page-nav {
    margin-bottom: 20px;
    & a {
      text-transform: uppercase;
    }
  }
</style>
