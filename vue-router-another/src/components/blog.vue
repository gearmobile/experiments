<template>
  <div class="blog">
    <div class="blog__post" v-for="(post, index) in posts">
      <img :src="post.image" alt="Post Image">
      <h3>{{ post.title }}</h3>
      <router-link :to="{ name: 'Post', params: { postID: index } }">read more</router-link>
    </div>
  </div>
</template>

<script>
  import posts from './posts.js';

  export default {
    data() {
      return {
        posts: posts,
      };
    },
  };
</script>
