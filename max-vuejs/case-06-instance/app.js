
// FILTERS
// ---------------------------------------------------

Vue.filter('capitalize', function (value) {
  return value.slice(0, 1).toUpperCase() + value.slice(1);
});

Vue.filter('capitalizeEachWord', function (value) {
  let line = value.toLowerCase().split(' ');
  for (let i = 0; i < line.length; i += 1) {
    line[i] = line[i].slice(0, 1).toUpperCase() + line[i].slice(1);
  }
  return line.join(' ');
});

// FIRST INSTANCE
// ---------------------------------------------------
const app1 = new Vue({
  data: {
    title: 'the vue instance',
    showParagraph: false,
  },
  methods: {
    show() {
      this.showParagraph = !this.showParagraph;
      this.updateTitle('the Vue instance (updated)');
    },
    updateTitle(value) {
      this.title = value;
    },
  },
  computed: {
    lowerCaseTitle() {
      return this.title.toLowerCase();
    },
  },
  watch: {
    title: function (value) {
      alert('The title changed, new value is: ' + value);
    },
  },
});

// SECOND INSTANCE
// ----------------------------------------------
const app2 = new Vue({
  data: {
    title: 'the title of second instance',
  },
  methods: {
    onChange() {
      app1.title = 'this title changed from second instance';
    },
  },
});


app1.$mount('#app1');
app2.$mount('#app2');

setTimeout(function () {
  app2.title = 'this title changed from javascript';
}, 3000);
