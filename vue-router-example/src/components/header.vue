<template>
  <section class="container header">
    <div class="row">
      <div class="col-md-12">
        <ul class="nav">
          <router-link tag="li" class="nav__item" to="/uno"><a>uno</a></router-link>
          <router-link tag="li" class="nav__item" to="/duo"><a>duo</a></router-link>
          <router-link tag="li" class="nav__item" to="/tre"><a>tre</a></router-link>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        //
      }
    }
  }
</script>

<style lang="scss">
  .nav {
    display: flex;
    justify-content: center;

    &__item {
      margin: 0 20px;
    }
  }
  a {
    text-transform: uppercase;
    font-size: 20px;
  }
</style>
