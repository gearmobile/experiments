<template>
    <article class="post" v-if="post">
        <header class="post__header">
            <img :src="post.image" alt="Post Image">
        </header>
        <div class="post__main">
            <h2 class="post__title">{{ post.title }}</h2>
            <p class="post__body">{{ post.body }}</p>
        </div>
    </article>
</template>

<script>
    var posts = require( '../posts' );
    module.exports = {
        data: function () {
            return {
                posts: posts,
                post: null
            }
        },
        created: function () {
            this.post = this.posts[0];
        }
    };
</script>

<style>
    .post__header {
        width: 100%;
        min-height: 200px;
        margin: 0 0 40px;
    }
    .post__header img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    .post__title {
        margin: 0 0 40px;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 30px;
    }
    .post__main {
        padding: 0 20px;
    }
</style>