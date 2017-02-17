<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1 class="text-center">the super quiz</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <component :is="mode"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Question from './components/question.vue';
  import Answer from './components/answer.vue';

  export default {
    name: 'app',
    data () {
      return {
        mode: 'app-question',
      };
    },
    components: {
      appAnswer: Answer,
      appQuestion: Question,
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
