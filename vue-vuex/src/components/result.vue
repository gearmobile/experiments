<template>
    <section class="result">
        <h3 class="result__caption">{{ counter }}</h3>
    </section>
</template>

<script>
    export default {
      data() {
        return {
          //
        };
      },
      computed: {
        counter() {
          return this.$store.state.counter;
        }
      }
    };
</script>

<style lang="scss">
    .result {
        padding: 20px 0;
        background-color: paleturquoise;
    }
    .result__caption {
        font-size: 18px;
        font-weight: 700;
    }
</style>
