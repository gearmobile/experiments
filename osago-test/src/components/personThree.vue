<template>
  <section class="person-three">
    <h1>person3</h1>
    <!--<region></region>
    <city></city>
    <bonusmalus></bonusmalus>
    <experience></experience>
    <drivers></drivers>
    <power></power>
    <periodExploitation></periodExploitation>
    <violations></violations>
    <trailer></trailer>
    <periodInsurance></periodInsurance>-->
    <experience></experience>
    <drivers></drivers>
    <periodInsurance></periodInsurance>
    <power></power>
  </section>
</template>

<script>
  // import region from './modules/region';
  // import city from './modules/city';
  // import bonusmalus from './modules/bonusmalus';
  // import experience from './modules/experience';
  // import drivers from './modules/drivers';
  // import power from './modules/power';
  // import periodExploitation from './modules/periodExploitation';
  // import violations from './modules/violations';
  // import trailer from './modules/trailer';
  // import periodInsurance from './modules/periodInsurance';
  import experience from './modules/experience';
  import drivers from './modules/drivers';
  import periodInsurance from './modules/periodInsurance';
  import power from './modules/power';

  export default {
    name: 'person-three',
    components: {
      // region,
      // city,
      // bonusmalus,
      // experience,
      // drivers,
      // power,
      // periodExploitation,
      // violations,
      // trailer,
      // periodInsurance,
      experience,
      drivers,
      periodInsurance,
      power,
    },
  };
</script>
