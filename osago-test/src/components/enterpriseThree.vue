<template>
  <section class="enterprise-three">
    <h1>enterprise-three</h1>
    <drivers></drivers>
    <periodInsurance></periodInsurance>
    <trailer></trailer>
    <power></power>
  </section>
</template>

<script>
  import drivers from './modules/drivers';
  import periodInsurance from './modules/periodInsurance';
  import trailer from './modules/trailer';
  import power from './modules/power';

  export default {
    name: 'enterprise-three',
    components: {
      drivers,
      periodInsurance,
      trailer,
      power,
    },
  };
</script>
