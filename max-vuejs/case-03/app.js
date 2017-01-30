new Vue({
  data: {
    name: 'John',
    isAttached: false,
    color: 'red',
    width: 100,
    height: 100,
    radius: 0,
    square: 100
  },
  // использование watchers
  watch: {
    name: function () {
      const wm = this;
      setInterval( function () {
        wm.name = 'John';
      }, 4000 );
    }
  },
  computed: {
    divClass: function () {
      return {
        green: this.isAttached,
        blue: !this.isAttached
      }
    },
    myStyle: function () {
      return {
        backgroundColor: this.color,
        width: this.width + 'px',
        height: this.height + 'px',
        borderRadius: this.radius + 'px'
      }
    },
    mySquare: function () {
      return {
        width: this.square + 'px'
      }
    }
  }
}).$mount('#app');
