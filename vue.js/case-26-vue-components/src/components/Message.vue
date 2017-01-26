<template>
    <header class="header">
        <h1 v-text="message"></h1>
    </header>
</template>

<script>
  export default {
    name: 'header',
      data () {
        return {
          message: 'Hello from Vue'
        }
      }
  }
</script>

<style scoped>
    .header {
        text-align: center;
        text-transform: uppercase;
        font-size: 30px;
        margin: 0 0 20px;
    }
</style>