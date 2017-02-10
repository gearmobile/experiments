<template>
  <section class="enterprise-five">
    <h1>enterprise-five</h1>
    <region></region>
    <city></city>
    <bonusmalus></bonusmalus>
    <drivers></drivers>
    <periodInsurance></periodInsurance>
    <violations></violations>
    <power></power>
    <trailer></trailer>
    <!--<periodExploitation></periodExploitation>-->
    <!--<experience></experience>-->
  </section>
</template>

<script>
  import region from './modules/region';
  import city from './modules/city';
  import bonusmalus from './modules/bonusmalus';
  import drivers from './modules/drivers';
  import periodInsurance from './modules/periodInsurance';
  import violations from './modules/violations';
  import power from './modules/power';
  import trailer from './modules/trailer';
  // import experience from './modules/experience';
  // import periodExploitation from './modules/periodExploitation';

  export default {
    name: 'enterprise-five',
    components: {
      region,
      city,
      bonusmalus,
      drivers,
      periodInsurance,
      violations,
      power,
      trailer,
      // experience,
      // periodExploitation,
    },
  };
</script>
