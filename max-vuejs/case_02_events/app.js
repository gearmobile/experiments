const app = new Vue({
  el: '#app',
  data: {
    counter: 0,
  },
  methods: {
    increase: () => {
      this.counter += 1;
    },
  },
});

// app.$mount('#app');
