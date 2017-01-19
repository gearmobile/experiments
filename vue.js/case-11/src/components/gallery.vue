<template>
    <section id="gallery" class="gallery">
        <div class="gallery__item card">
            <figure class="card__image">
                <img src="./../assets/logo.png" alt="Logo">
            </figure>
            <h2 class="card__title">{{ msg1 }}</h2>
            <h4 class="card__subtitle">{{ subtl1 }}</h4>
            <p>{{ text }}</p>
        </div>
        <div class="gallery__item card">
            <figure class="card__image">
                <img src="./../assets/logo.png" alt="Logo">
            </figure>
            <h2 class="card__title">{{ msg2 }}</h2>
            <h4 class="card__subtitle">{{ subtl2 }}</h4>
            <p>{{ text }}</p>
        </div>
        <div class="gallery__item card">
            <figure class="card__image">
                <img src="./../assets/logo.png" alt="Logo">
            </figure>
            <h2 class="card__title">{{ msg3 }}</h2>
            <h4 class="card__subtitle">{{ subtl3 }}</h4>
            <p>{{ text }}</p>
        </div>
        <div class="gallery__item card">
            <figure class="card__image">
                <img src="./../assets/logo.png" alt="Logo">
            </figure>
            <h2 class="card__title">{{ msg4 }}</h2>
            <h4 class="card__subtitle">{{ subtl4 }}</h4>
            <p>{{ text }}</p>
        </div>
    </section>
</template>

<style>
    .gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 10px 20px;
    }
    .gallery__item {
        width: calc( 100% / 4 ) ;
        border: 2px solid forestgreen;
        border-radius: 2px;
        margin: 0 10px 10px;
        background-color: palegreen;
    }
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
    .card__title {
        text-transform: uppercase;
        margin: 0 0 10px;
    }
    .card__subtitle {
        text-transform: capitalize;
        margin: 0 0 20px;
    }
    .card__image {
        width: 100px;
        height: 100px;
    }
    .card__image img {
        width: 100%;
        height: auto;
        vertical-align: top;
    }
    .card p {
        line-height: 1.6;
        font-size: 14px;
        margin: 0 0 20px;
    }
    .card p:last-of-type {
        margin-bottom: 0;
    }
    /* ---------------- media queries ----------------- */
    @media screen and ( max-width: 1000px ) {
        .gallery {}
    }
</style>

<script>
    export default {
        name: 'gallery',
        data () {
            return {
                msg1: 'title one',
                msg2: 'title two',
                msg3: 'title three',
                msg4: 'title four',
                subtl1: 'lorem ipsum dolor est',
                subtl2: 'lorem ipsum dolor est',
                subtl3: 'lorem ipsum dolor est',
                subtl4: 'lorem ipsum dolor est',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ea enim esse, est ipsa obcaecati quia recusandae repudiandae ut voluptate.'
            }
        }
    }
</script>


























