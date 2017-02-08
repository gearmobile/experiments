<template>
  <section class="second">
    <duo></duo>
    <quattro></quattro>
  </section>
</template>

<script>
  import duo from './modules/duo';
  import quattro from './modules/quattro';
  
  export default {
    name: 'second',
    components: {
      duo,
      quattro,
    },
  };
</script>
