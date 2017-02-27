<template>
    <section class="counter">
        <button class="btn btn-primary" @click="increment">increment</button>
        <button class="btn btn-primary" @click="decrement">decrement</button>
    </section>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    methods: {
      ...mapMutations([ 'increment', 'decrement' ])
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
