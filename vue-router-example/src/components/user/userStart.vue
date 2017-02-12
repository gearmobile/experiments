<template>
  <section class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="caption">user start component</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum sequi, unde magni itaque? Quas excepturi, fugiat necessitatibus sint hic, tempora.</p>
        <ul class="list-group">
          <router-link
            tag="li"
            to="/user/1"
            class="list-group-item"
            style="cursor: pointer">section 1</router-link>
          <router-link
            tag="li"
            to="/user/2"
            class="list-group-item"
            style="cursor: pointer">section 2</router-link>
          <router-link
            tag="li"
            to="/user/3"
            class="list-group-item"
            style="cursor: pointer">section 3</router-link>
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

<style lang="scss" scoped>
  .caption {
    text-transform: capitalize;
    color: cornflowerblue;
  }
</style>
