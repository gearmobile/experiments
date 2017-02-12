<template>
  <section>
    <h2 class="caption">user edit component</h2>
    <p>loaded user id: {{ $route.params.id }}</p>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        // id: this.$route.params.id,
      };
    },
  };
</script>
