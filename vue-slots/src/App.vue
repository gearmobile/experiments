<template>
  <div id="app">
    <button @click="selectedComponent = 'appQuotes'">quote</button>
    <button @click="selectedComponent = 'appAuthor'">author</button>
    <button @click="selectedComponent = 'appNew'">new</button>
    <component :is="selectedComponent"></component>
    <app-quotes>
      <h3 slot="header">{{title}}</h3>
      <p slot="body">{{subtitle}}</p>
      <p>{{ tertiary }}</p>
      <p slot="add">{{ addTitle }}</p>
    </app-quotes>
  </div>
</template>

<script>
  import Quotes from './components/quotes.vue';
  import Author from './components/author.vue';
  import New from './components/new.vue';

  export default {
    name: 'app',
    data() {
      return {
        title: 'quotes header',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, maxime!',
        tertiary: 'this is content of default slot',
        addTitle: 'additional title from parent component',
        selectedComponent: 'appQuotes',
      };
    },
    components: {
      appQuotes: Quotes,
      appAuthor: Author,
      appNew: New,
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
  h3 {
    text-transform: capitalize;
    color: green;
  }
</style>
