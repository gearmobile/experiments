<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>animations</h1>
          <hr>
          <button class="btn btn-primary" @click="showAlert = !showAlert">show alert</button>
          <transition name="alert">
            <div class="alert alert-info" v-if="showAlert">this is some info</div>
          </transition>
          <transition name="slide">
            <div class="alert alert-info" v-if="showAlert">this is some info</div>
          </transition>
          <transition name="combo">
            <div class="alert alert-info" v-if="showAlert">this is some info</div>
          </transition>
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
      showAlert: false,
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 60px;
  }
  .btn {
    margin-bottom: 20px;
  }
  .alert-enter {
    opacity: 0;
  }
  .alert-enter-active {
    transition: opacity 1s;
  }
  .alert-leave {
    /*opacity: 1;*/
  }
  .alert-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
  .slide-enter {
    /**/
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
  }
  .slide-leave {
    /**/
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
  }
  @keyframes slide-in {
    from {
      transform: translateY( 20px )
    }
    to {
      transform: translateY( 0 )
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY( 0 )
    }
    to {
      transform: translateY( 20px )
    }
  }
  @keyframes slide-in-left {
    from {
      transform: translateX( 200px )
    }
    to {
      transform: translateX( 0 )
    }
  }
  @keyframes slide-out-left {
    from {
      transform: translateX( 0 )
    }
    to {
      transform: translateX( 200px )
    }
  }
  .combo-enter {
    opacity: 0;
  }
  .combo-enter-active {
    transition: opacity 2s;
    animation: slide-in-left 1s ease-in-out forwards;
  }
  .combo-leave {
    /**/
  }
  .combo-leave-active {
    transition: opacity 2s;
    opacity: 0;
    animation: slide-out-left 1s ease-in-out forwards;
  }
</style>
