<template>
  <section class="enterprise-two">
    <h1>enterprise-two</h1>
    <region></region>
    <city></city>
    <bonusmalus></bonusmalus>
    <drivers></drivers>
    <periodExploitation></periodExploitation>
    <violations></violations>
    <trailer></trailer>
  </section>
</template>

<script>
  import region from './modules/region';
  import city from './modules/city';
  import bonusmalus from './modules/bonusmalus';
  import drivers from './modules/drivers';
  import periodExploitation from './modules/periodExploitation';
  import violations from './modules/violations';
  import trailer from './modules/trailer';

  export default {
    name: 'enterprise-two',
    components: {
      region,
      city,
      bonusmalus,
      drivers,
      periodExploitation,
      violations,
      trailer,
    },
  };
</script>
