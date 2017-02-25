<template>
  <div class="post" v-if="post">
    <img :src="post.image" alt="Post Image">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
    <router-link :to="{ name: 'Blog' }">back</router-link>
  </div>
</template>

<script>
  import posts from './posts.js';
  export default {
    data() {
      return {
        posts: posts,
        post: null,
      };
    },
    created() {
      const postID = this.$route.params.postID;
      this.post = this.posts[postID];
    },
  };
</script>
