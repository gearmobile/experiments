<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>{{msg}}</h2>
          <hr>
          <button class="btn btn-primary" @click="showAlert">{{btnTitle}}</button>
          <hr>
          <select name="select" id="select" v-model="currAnima" class="form-control">
            <option value="fadeMe">Fade Effect</option>
            <option value="anima">Slide Effect</option>
          </select>
          <hr>
          <transition :name="currAnima">
            <div class="alert bg-success" v-show="show">{{alertTitle | toUpLetters}}</div>
          </transition>
          <transition name="anima" type="animation">
            <div class="alert bg-success" v-if="show">{{alertTitle | toUpLetters}}</div>
          </transition>
          <transition name="fadeMe" appear>
            <div class="alert bg-success" v-show="show">{{alertTitle | toUpLetters}}</div>
          </transition>
          <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
            <div class="alert bg-success" v-show="show">{{alertTitle | toUpLetters}}</div>
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
      msg: 'Vue Animations',
      btnTitle: 'Show Block',
      alertTitle: 'this is some text',
      show: true,
      currAnima: 'fadeMe',
    };
  },
  methods: {
    showAlert() {
      this.show = !this.show;
    }
  },
  filters: {
    toUpLetters(value) {
      return value.toUpperCase();
    }
  },
};
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .fadeMe-enter{
    opacity: 0;
  }
  .fadeMe-enter-active {
    transition: opacity 1s ease-in-out;
  }
  .fadeMe-leave {
    /**/
  }
  .fadeMe-leave-active {
    transition: opacity 1s ease-in-out;
    opacity: 0;
  }
  /* ======================================= */
  .anima-enter {
    opacity: 0;
  }
  .anima-enter-active {
    animation: slideUp 1s forwards;
    transition: opacity 1s ease-in-out;
  }
  /*.anima-leave {}*/
  .anima-leave-active {
    animation: slideDown 1s forwards;
    transition: opacity 3s ease-in-out;
    opacity: 0;
  }
  @keyframes slideUp {
    0% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  @keyframes slideDown {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(20px);
    }
  }
</style>
