<template>
  <ul class="list-unstyled">
    <router-link tag="li" to="/edit"><a>edit</a></router-link>
    <router-link tag="li" to="/details"><a>details</a></router-link>
  </ul>
</template>

<style lang="scss" scoped>
  .list-unstyled {
    display: flex;
    justify-content: center;
  }
</style>
