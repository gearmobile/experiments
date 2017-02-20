<template>
  <div id="app" class="app">
    <div class="container app__container">
      <div class="row app__row">
        <div class="col-md-8 col-md-offset-2 app__column">
          <div class="col-md-4">
            <select class="form-control" name="select1" id="select1" v-model="group1Value">
              <option v-for="item in group1" :value="item.value" v-text="item.name"></option>
            </select>
          </div>
          <div class="col-md-4">
            <select class="form-control" name="select2" id="select2" v-model="group2Value">
              <option v-for="item in group2" :value="item.value" v-text="item.name"></option>
            </select>
          </div>
          <div class="col-md-4">
            <select class="form-control" name="select3" id="select3" v-model="group3Value" @change="onChange">
              <option v-for="item in group3" :value="item.value" v-text="item.name"></option>
            </select>
          </div>
        </div>
      </div>
      <div class="row app__row">
        <div class="col-md-8 col-md-offset-2 app__column">
          <section class="list-unstyled">
            <div v-for="item in blocksCurrent" v-html="item"></div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import uno from './components/uno.vue';
  import duo from './components/duo.vue';
  import tre from './components/tre.vue';
  import quattro from './components/quattro.vue';
  import cinque from './components/cinque.vue';

  export default {
    name: 'app',
    data() {
      return {
        group1: [
          { name: 'not selected', value: 0 },
          { name: 'group1-1', value: 1 },
          { name: 'group1-2', value: 2 },
        ],
        group2: [
          { name: 'not selected', value: 0 },
          { name: 'group2-1', value: 1 },
          { name: 'group2-2', value: 2 },
        ],
        group3: [
          { name: 'not selected', value: 0 },
          { name: 'group3-1', value: 1 },
          { name: 'group3-2', value: 2 },
        ],
        group1Value: 0,
        group2Value: 0,
        group3Value: 0,
        blocksCurrent: [],
      }
    },
    components: {
      uno,
      duo,
      tre,
      quattro,
      cinque,
    },
    methods: {
       enter( el, done ) {
        TweenMax.from( el, 0.8, { autoAlpha: 0, scale: 0, ease: Back.easeInOut, onComplete: done });
      },
      leave( el, done ) {
        TweenMax.to( el, 1, { autoAlpha: 0, scale: 0, ease: Back.easeInOut, onComplete: done }, );
      },
      onChange() {
        if ( this.group1Value === 1 && this.group2Value === 1 && this.group3Value === 1 ) {
          this.blocksCurrent = [ '<uno></uno>', '<tre></tre>', '<cinque></cinque>' ];
        } else if ( this.group1Value === 2 && this.group2Value === 2 && this.group3Value === 2 ) {
          this.blocksCurrent = [ '<duo></duo>', '<quattro></quattro>' ];
        }
      }
    },
  }
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
  .app__column {
    margin-bottom: 40px;
  }
</style>
