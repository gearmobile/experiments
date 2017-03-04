<template>
  <section class="result-another">
    <h3>{{ stringCounter }}</h3>
    <h3 class="result-another__caption">{{ doubleCounter }}</h3>
    <h4>{{ string }}</h4>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters([ 'doubleCounter', 'stringCounter' ]),
      string() {
        return 'vue.js and vuex';
      },
    },
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
