<template>
  <section class="person-five">
    <h1>person5</h1>
    <region></region>
    <city></city>
    <bonusmalus></bonusmalus>
    <experience></experience>
    <drivers></drivers>
    <power></power>
    <violations></violations>
    <periodInsurance></periodInsurance>
  </section>
</template>

<script>
  import region from './modules/region';
  import city from './modules/city';
  import bonusmalus from './modules/bonusmalus';
  import experience from './modules/experience';
  import drivers from './modules/drivers';
  import power from './modules/power';
  import violations from './modules/violations';
  import periodInsurance from './modules/periodInsurance';

  export default {
    name: 'person-five',
    components: {
      region,
      city,
      bonusmalus,
      experience,
      drivers,
      power,
      violations,
      periodInsurance,
    },
  };
</script>
