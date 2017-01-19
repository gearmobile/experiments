var Vue = require( 'vue' );
var VueResource = require( 'vue-resource' );

// COMPONTENTS
// ---------------------------------------------
// var App = require( './components/app.vue' );
// var Posts = require( './components/posts.vue' );

// REGISTER PLUGINS TO USE
// ---------------------------------------------
Vue.use( VueResource );

var wm = new Vue({
  el: '#wrapper',
    data: {
        allPosts: [],
        singlePost: {},
        endPoint: 'https://jsonplaceholder.typicode.com/posts'
    },
    components: {
        // 'page-header': App,
        // 'page-posts': Posts
    },
    methods: {
        // get one post
        getSinglePost: function () {
            var resource = this.$resource( 'https://jsonplaceholder.typicode.com/posts{/id}' );
            resource.get({ id: 1 }).then( function ( response ) {
                this.singlePost = response.data;
            });
        },
        // get all posts
        getAllPosts: function () {
            var postsOptions = {
                params: {
                    _start: 10,
                    _limit: 5
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            this.$http.get( this.endPoint, postsOptions ).then(
                function ( response ) {
                    // console.log( response );
                    this.allPosts = response.data;
                },
                function ( error ) {
                    //
                }
            );
        }
    },
    created: function () {
        // this.getAllPosts();
        this.getSinglePost();
    }
    // props: [ 'posts' ]
});
