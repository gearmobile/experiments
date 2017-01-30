const app = new Vue({
  data: {
    title: 'Hello from Vue',
    link: 'http://google.com/',
    linkFinished: '<a href="ya.ru" target="_blank">Yandex</a>',
    google: 'Google',
    titleChanged: 'Holla from Vue.js',
  },
  methods: {
    sayHello() {
      this.title = this.titleChanged;
      return this.title;
    },
  },
}).$mount('#app');
