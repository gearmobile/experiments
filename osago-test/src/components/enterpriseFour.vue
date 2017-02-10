<template>
  <section class="enterprise-four">
    <h1>enterprise-four</h1>
    <drivers></drivers>
    <periodInsurance></periodInsurance>
    <trailer></trailer>
  </section>
</template>

<script>
  import drivers from './modules/drivers';
  import periodInsurance from './modules/periodInsurance';
  import trailer from './modules/trailer';

  export default {
    name: 'enterprise-four',
    components: {
      drivers,
      periodInsurance,
      trailer,
    },
  };
</script>
