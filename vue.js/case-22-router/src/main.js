let Vue = require( 'vue' );
let VueRouter = require( 'vue-router' );

let About = require( './components/About.vue' );
let Brands = require( './components/Brands.vue' );
let Contacts = require( './components/Contacts.vue' );
let Projects = require( './components/Projects.vue' );
let Blog = require( './components/Blog.vue' );
let Post = require( './components/Post.vue' );

Vue.use( VueRouter );

let router = new VueRouter({
  routes: [
      { path: '/about', component: About },
      { path: '/brands', component: Brands },
      { path: '/contacts', component: Contacts },
      { path: '/projects', component: Projects },
      { path: '/blog', component: Blog },
      { path: '/post/:id', name: 'post', component: Post }
  ]
});

let app = new Vue({
    el: '#app',
    router: router
});
