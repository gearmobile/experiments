<template>
  <section class="container">
    <div class="row">
      <div class="col-md-12">
        <ul class="nav nav-pills">
          <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
          <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
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
