<template>
  <ul class="list-unstyled">
    <router-link tag="li" to="/"><a>home</a></router-link>
    <router-link tag="li" to="/user/second"><a>user</a></router-link>
  </ul>
</template>

<style lang="scss" scoped>
  .list-unstyled {
    display: flex;
    justify-content: center;

    & li {
      margin: 0 20px;
    }

    & a {
      text-decoration: none;
      text-transform: uppercase;
      font-size: 16px;
    }
  }
</style>
