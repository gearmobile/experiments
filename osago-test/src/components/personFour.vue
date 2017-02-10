<template>
  <section class="person-four">
    <h1>person4</h1>
    <experience></experience>
    <drivers></drivers>
    <periodInsurance></periodInsurance>
    <trailer></trailer>
  </section>
</template>

<script>
  import experience from './modules/experience';
  import drivers from './modules/drivers';
  import periodInsurance from './modules/periodInsurance';
  import trailer from './modules/trailer';

  export default {
    name: 'person-four',
    components: {
      experience,
      drivers,
      periodInsurance,
      trailer,
    },
  };
</script>
