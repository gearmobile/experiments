<template>
    <section class="blog">
        <div class="post" v-for="item in posts">
            <span class="post__id">{{ item.id }}</span>
            <h3 class="post__title">{{ item.title }}</h3>
            <p class="post__body">{{ item.body }}</p>
        </div>
    </section>
</template>

