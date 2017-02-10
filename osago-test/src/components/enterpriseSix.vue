<template>
  <section class="enterprise-six">
    <h1>enterprise-six</h1>
    <region></region>
    <city></city>
    <bonusmalus></bonusmalus>
    <drivers></drivers>
    <periodInsurance></periodInsurance>
    <violations></violations>
    <trailer></trailer>
  </section>
</template>

<script>
  import region from './modules/region';
  import city from './modules/city';
  import bonusmalus from './modules/bonusmalus';
  import drivers from './modules/drivers';
  import periodInsurance from './modules/periodInsurance';
  import violations from './modules/violations';
  import trailer from './modules/trailer';

  export default {
    name: 'enterprise-six',
    components: {
      region,
      city,
      bonusmalus,
      drivers,
      periodInsurance,
      violations,
      trailer,
    },
  };
</script>
