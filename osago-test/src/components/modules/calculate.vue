<template>
  <div class="row calc__row">
    <div class="col-md-6">
      <button type="button" class="btn btn-default">button</button>
    </div>
    <div class="col-md-6">
      <button type="button" class="btn btn-default calc__calculate" @click="getSum">calculate</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'calculate',
    data() {
      return {
        //
      };
    },
    methods: {
      getSum() {
        //
      },
    },
  };
</script>
