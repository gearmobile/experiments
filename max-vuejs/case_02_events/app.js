new Vue({
  data: {
    count: 0,
    x: 0,
    y: 0,
  },
  methods: {
    increaseCounter(value) {
      this.count += value;
    },
    decreaseCounter(value) {
      if (this.count > 0) {
        this.count -= value;
      } else {
        return false;
      }
    },
    mouseMove(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    inputModify(event) {
      console.log(event.target.value);
    },
  },
}).$mount('#app');
