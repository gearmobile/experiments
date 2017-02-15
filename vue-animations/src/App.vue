<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <button class="btn btn-primary" @click="addItem">{{ btnAddTitle }}</button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <ul class="list-group">
            <transition-group name="slide">
              <li class="list-group-item" v-for="( item, index ) in numbers" v-text="item" @click="removeItem( index )" :key="item"></li>
            </transition-group>
          </ul>
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
      numbers: [ 1, 2, 3, 4, 5 ],
      btnAddTitle: 'add item',
      btnDelTitle: 'delete item',
    };
  },
  methods: {
    showAlert() {
      this.show = !this.show;
    },
    addItem() {
      let pos = Math.floor( Math.random() * this.numbers.length );
      this.numbers.splice( pos, 0, this.numbers.length + 1 );
    },
    removeItem( index ) {
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
  }
  .list-group-item {
    cursor: pointer;
  }
</style>
