<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h3>{{ reverseName() }}</h3>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  props: {
    userAge: {
      type: Number,
      default: 34,
    },
    userName: {
      type: String,
    },
  },
  methods: {
    reverseName() {
      return this.userName.split('').reverse().join('');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
