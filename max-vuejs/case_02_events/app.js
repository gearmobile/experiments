new Vue({
  data: {
    count: 0,
  },
  methods: {
    increaseCounter() {
      this.count += 1;
    },
    decreaseCounter() {
      if (this.count <= 0) {
        return false;
      }
      this.count -= 1;
    },
  },
}).$mount('#app');
