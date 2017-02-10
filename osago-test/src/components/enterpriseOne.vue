<template>
  <section class="enterprise-one">
    <h1>enterprise-one</h1>
    <region></region>
    <city></city>
    <bonusmalus></bonusmalus>
    <drivers></drivers>
    <periodExploitation></periodExploitation>
    <violations></violations>
    <power></power>
    <trailer></trailer>
    <!--<experience></experience>-->
    <!--<periodInsurance></periodInsurance>-->
  </section>
</template>

<script>
  import region from './modules/region';
  import city from './modules/city';
  import bonusmalus from './modules/bonusmalus';
  import drivers from './modules/drivers';
  import periodExploitation from './modules/periodExploitation';
  import violations from './modules/violations';
  import power from './modules/power';
  import trailer from './modules/trailer';
  // import experience from './modules/experience';
  // import periodInsurance from './modules/periodInsurance';

  export default {
    name: 'enterprise-one',
    components: {
      region,
      city,
      bonusmalus,
      drivers,
      periodExploitation,
      violations,
      power,
      trailer,
      // experience,
      // periodInsurance,
    },
  };
</script>
