<template>
  <section class="first">
    <uno></uno>
    <tre></tre>
  </section>
</template>

<script>
  import uno from './modules/uno';
  import tre from './modules/tre';
  
  export default {
    name: 'first',
    components: {
      uno,
      tre,
    },
  };
</script>
