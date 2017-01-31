new Vue({
  el: '#app',
  data: {
    status: true,
    show: true,
    ingredients: [ 'meat', 'fruit', 'cookies' ],
    persons: [
      { name: 'Max', age: 27, color: 'red' },
      { name: 'John', age: 30, color: 'black' },
      { name: 'Jenny', age: 19, color: 'blond' },
    ],
  },
  methods: {
    toogle() {
      this.status = !this.status;
    },
    showAndHide() {
      this.show = !this.show;
    }
  },
});
