<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>filters and mixins</h2>
          <p>{{ title | toUpCase | to-low-case }}</p>
          <hr>
          <input class="form-group" type="text" placeholder="enter your choice here" v-model="filterText">
          <ul class="list-unstyled">
            <li v-for="item in filteredFruits">{{ item }}</li>
          </ul>
          <hr>
          <app-list></app-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import List from './components/List.vue';
  import fruitMixin from './mixin';

  export default {
    name: 'app',
    data() {
      return {
        title: 'hello from vue',
      };
    },
    mixins: [fruitMixin],
    filters: {
      toUpCase(value) {
        return value.toUpperCase();
      },
    },
    components: {
      appList: List,
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
</style>
