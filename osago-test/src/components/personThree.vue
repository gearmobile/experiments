<template>
  <section class="person-three">
    <h1>person3</h1>
    <experience></experience>
    <drivers></drivers>
    <periodInsurance></periodInsurance>
    <power></power>
  </section>
</template>

<script>
  import experience from './modules/experience';
  import drivers from './modules/drivers';
  import periodInsurance from './modules/periodInsurance';
  import power from './modules/power';

  export default {
    name: 'person-three',
    components: {
      experience,
      drivers,
      periodInsurance,
      power,
    },
  };
</script>
