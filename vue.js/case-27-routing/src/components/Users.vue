<template>
  <section class="users">
    <h1 class="users__title">users section</h1>
  </section>
</template>

<script>
  export default {
    name: 'users'
  }
</script>

<style scoped>
    .users {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: indianred;
    }
    .users__title {
        text-transform: uppercase;
        font-size: 6rem;
    }
</style>