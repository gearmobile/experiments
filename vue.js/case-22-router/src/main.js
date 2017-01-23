var Vue = require( 'vue' );
var VueRouter = require( 'vue-router' );

var About = require( './components/About.vue' );
var Brands = require( './components/Brands.vue' );
var Contacts = require( './components/Contacts.vue' );
var Projects = require( './components/Projects.vue' );
var Blog = require( './components/Blog.vue' );
var Post = require( './components/Post.vue' );

Vue.use( VueRouter );

var router = new VueRouter({
  routes: [
      { path: '/about', component: About },
      { path: '/brands', component: Brands },
      { path: '/contacts', component: Contacts },
      { path: '/projects', component: Projects },
      { path: '/blog', component: Blog },
      { path: '/post', component: Post }
  ]
});

var app = new Vue({
    el: '#app',
    router: router
});
