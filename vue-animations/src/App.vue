<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <button class="btn btn-primary" @click="addItem">{{ buttonTitle }}</button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <transition-group class="list-group" tag="ul" name="slide">
            <li class="list-group-item" v-for="(item,index) in numbers" :key="item" @click="delItem(index)">{{ item }}</li>
          </transition-group>
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
      numbers: [1, 2, 3, 4, 5, 6],
      buttonTitle: 'add item in list',
      show: true
    };
  },
  methods: {
    addItem() {
      let pos = Math.floor( Math.random() * this.numbers.length );
      this.numbers.splice( pos, 0, this.numbers.length + 1 );
    },
    delItem (index) {
      this.numbers.splice( index, 1 );
    },
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
  .row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  .list-group-item {
    cursor: pointer;
  }

  .slide-enter {}
  .slide-enter-active {
    animation: slideIn 1s ease-in-out forwards;
  }
  .slide-leave {}
  .slide-leave-active {
    animation: slideOut 1s ease-in-out forwards;
  }

  .slide-move {
    transition: transform 1s;
  }


  @keyframes slideIn {
    from {
      transform: translateY( 20px );
    }
    to {
      transform: translateY( 0 );
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateY( 0 );
    }
    to {
      transform: translateY( 20px );
    }
  }
</style>
