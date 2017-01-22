
class NotificationStore {
  constructor () {
    this.state = {
      count: 0
    }
  }
  increment () {
    return this.state.count++
  }
  decrement ()  {
    return this.state.count--
  }
}

let notificationStore = new NotificationStore();

let Counter = {
  template: '<section><button @click.prevent="fnIncrement">increment value {{ count }}</button><button @click.prevent="fnDecrement">decrement value {{ count }}</button></section>',
    data: function () {
    return {
      state: notificationStore.state
    }
  },
  computed: {
    count: function () {
      return this.state.count
    }
  },
  methods: {
    fnIncrement: function () {
      notificationStore.increment();
    },
    fnDecrement: function () {
      notificationStore.decrement();
    }
  }
};

let Notifications = {
  components: { Counter },
  methods: {
    addNotification: function () {
      notificationStore.increment()
    }
  },
  template: '<div><counter></counter><button @click.prevent="addNotification">increment all values</button></div>'
};




let wm = new Vue({
  el: '#app ',
  components: { Notifications, Counter }
});