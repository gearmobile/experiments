<template>
    <section class="result">
        <h3 class="result__caption">{{ counter }}</h3>
    </section>
</template>

<script>
    export default {
      computed: {
        counter() {
          return this.$store.getters.doubleCounter;
        }
      }
    };
</script>

<style lang="scss">
    .result {
        padding: 20px 0;
        background-color: paleturquoise;
        margin: 10px 0;
    }
    .result__caption {
        font-size: 18px;
        font-weight: 700;
    }
</style>
