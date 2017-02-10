<template>
  <section class="person-six">
    <h1>person6</h1>
    <region></region>
    <city></city>
    <bonusmalus></bonusmalus>
    <experience></experience>
    <drivers></drivers>
    <violations></violations>
    <trailer></trailer>
    <periodInsurance></periodInsurance>
  </section>
</template>

<script>
  import region from './modules/region';
  import city from './modules/city';
  import bonusmalus from './modules/bonusmalus';
  import experience from './modules/experience';
  import drivers from './modules/drivers';
  import violations from './modules/violations';
  import trailer from './modules/trailer';
  import periodInsurance from './modules/periodInsurance';

  export default {
    name: 'person-six',
    components: {
      region,
      city,
      bonusmalus,
      experience,
      drivers,
      violations,
      trailer,
      periodInsurance,
    },
  };
</script>
