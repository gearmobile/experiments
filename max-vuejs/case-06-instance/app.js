
// FILTERS
// ---------------------------------------------------
Vue.filter('capitalize', function (value) {
  return value.slice(0, 1).toUpperCase() + value.slice(1);
});

Vue.filter('capitalizeEachWord', function (value) {
  let line = value.toLowerCase().split(' ');
  return line.map(function (item) {
    return item.slice(0, 1).toUpperCase() + item.slice(1);
  }).join(' ');
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
      this.$refs.appButton.innerText = this.showParagraph ? 'the paragraph is visible' : 'the paragraph is not visible';
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
      app1.show();
    },
  },
});


app1.$mount('#app1');
app2.$mount('#app2');

setTimeout(function () {
  app2.title = 'this title changed from javascript';
}, 3000);

console.log(app1.$data.title);
