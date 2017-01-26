<template>
  <section class="home">
    <h1 class="home__caption">home section</h1>
  </section>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped>
    .home {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: yellowgreen;
    }
    .home__caption {
        text-transform: uppercase;
        font-size: 6rem;
    }
</style>