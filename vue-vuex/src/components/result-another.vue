<template>
    <section class="result-another">
        <h3 class="result-another__caption">{{ counter }}</h3>
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
        return this.$store.state.counter * 2;
      }
    }
  };
</script>

<style lang="scss">
    .result-another {
        padding: 20px 0;
        background-color: palegreen;
        margin: 10px 0;
    }
    .result-another__caption {
        font-size: 18px;
        font-weight: 700;
    }
</style>
