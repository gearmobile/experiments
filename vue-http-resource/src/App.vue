<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>http</h1>
          <hr>
          <div class="form-group">
            <label for="name">username</label>
            <input class="form-control" v-model="user.username" type="text" name="name" id="name" placeholder="enter your name">
          </div>
          <div class="form-group">
            <label for="email">email</label>
            <input class="form-control" v-model="user.useremail" type="email" name="email" id="email" placeholder="enter your email">
          </div>
          <div class="form-group">
            <button class="btn btn-primary" @click="submit">submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        user: {
          username: '',
          useremail: '',
        },
      };
    },
    methods: {
      submit() {
        const url = 'https://vueresource-8a4dd.firebaseio.com/';
        this
          .$http.post(url+'data.json', this.user)
          .then(response => {
            console.log(response);
          }, error => {
            console.log(error);
          });
      },
    },
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  .form-group {
    margin-bottom: 20px;
  }
  .btn {
    cursor: pointer;
  }
</style>
