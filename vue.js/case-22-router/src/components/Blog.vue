
<template>
    <section class="blog">
        <article v-for="item in posts" class="blog__post">
            <header class="blog__header">
                <div class="blog__image">
                    <img :src="item.image" alt="Post Image">
                </div>
                <h2 class="blog__title">{{ item.title }}</h2>
            </header>
            <div class="blog__main">
                <p>{{ item.body }}</p>
                <router-link to="{ name: 'post' }">read more</router-link>
            </div>
        </article>
    </section>
</template>

<script>
    var posts = require( '../posts' );
    module.exports = {
        data: function () {
            return {
                posts: posts
            }
        }
    };
</script>

<style>
    .blog {}
    .blog__post {
        padding: 0 0 40px;
    }
    .blog__header {}
    .blog__image {
        width: 100%;
        min-height: 200px;
        margin: 0 0 30px;
    }
    .blog__image img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    .blog__title {
        margin: 0 0 30px;
        padding: 0 20px;
        text-transform: capitalize;
        font-weight: 700;
    }
    .blog__main {
        padding: 0 20px;
    }
</style>