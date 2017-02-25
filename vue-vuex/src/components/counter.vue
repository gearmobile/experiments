<template>
    <section class="counter">
        <button class="btn btn-primary" @click="increment">increment</button>
        <button class="btn btn-primary" @click="decrement">decrement</button>
    </section>
</template>

<script>
  export default {
    data() {
      return {
        //
      };
    },
    methods: {
        increment() {
          this.$store.state.counter += 1;
        },
        decrement() {
          this.$store.state.counter -= 1;
        }
    }
  };
</script>

<style lang="scss">
    .counter{
        margin-top: 20px;
        & button {
          margin: 0 20px;
          text-transform: uppercase;
        }
    }
</style>
