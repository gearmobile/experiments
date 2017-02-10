<template>
  <section class="enterprise-three">
    <h1>enterprise-three</h1>
    <!--<region></region>-->
    <!--<city></city>-->
    <drivers></drivers>
    <periodInsurance></periodInsurance>
    <trailer></trailer>
    <power></power>
    <!--<bonusmalus></bonusmalus>-->
    <!--<experience></experience>-->
    <!--<periodExploitation></periodExploitation>-->
    <!--<violations></violations>-->
  </section>
</template>

<script>
  // import region from './modules/region';
  // import city from './modules/city';
  import drivers from './modules/drivers';
  import periodInsurance from './modules/periodInsurance';
  import trailer from './modules/trailer';
  import power from './modules/power';
  // import bonusmalus from './modules/bonusmalus';
  // import experience from './modules/experience';
  // import periodExploitation from './modules/periodExploitation';
  // import violations from './modules/violations';

  export default {
    name: 'enterprise-three',
    components: {
      // region,
      // city,
      drivers,
      periodInsurance,
      trailer,
      power,
      // bonusmalus,
      // experience,
      // periodExploitation,
      // violations,
    },
  };
</script>
