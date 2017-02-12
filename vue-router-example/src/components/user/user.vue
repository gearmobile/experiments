<template>
  <section class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="caption">user component</h2>
        <hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, explicabo unde ducimus alias in ratione eius debitis id tenetur cumque dolores animi laudantium beatae qui nisi dolore eveniet nesciunt distinctio.</p>
        <p>loaded id: {{ id }}</p>
        <button class="btn btn-primary" type="button" @click="backHome">go back home</button>
        <hr>
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
      };
    },
    methods: {
      backHome() {
        this.$router.push('/');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .caption {
    text-transform: capitalize;
    color: mediumvioletred;
  }
</style>
