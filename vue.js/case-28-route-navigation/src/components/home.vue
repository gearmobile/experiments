<template>
    <section class="home">
        <h1 class="home__title">section home</h1>
    </section>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style scoped>
    .home {
        background-color: palegreen;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .home__title {
        text-transform: uppercase;
        font-size: 60px;
    }
</style>