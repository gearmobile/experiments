<template>
    <section class="gallery">
        <div class="gallery__item card">
            <h4 class="card__title">{{ title }}</h4>
            <p class="card__subtitle">{{ subtitle }}</p>
            <p>{{ text }}</p>
        </div>
        <div class="gallery__item card">
            <h4 class="card__title">{{ title }}</h4>
            <p class="card__subtitle">{{ subtitle }}</p>
            <p>{{ text }}</p>
        </div>
        <div class="gallery__item card">
            <h4 class="card__title">{{ title }}</h4>
            <p class="card__subtitle">{{ subtitle }}</p>
            <p>{{ text }}</p>
        </div>
    </section>
</template>

<style lang="sass">
    .gallery {
        display: flex;
        justify-content: space-between;

        &__item {
            flex: 0 1 48%;
            margin: 0 1%;
            background-color: darkseagreen;
            border: 1px solid darkgreen;
            -webkit-border-radius: 6px;
            -moz-border-radius: 6px;
            border-radius: 6px;
        }
    }
    .card {
        text-align: center;
        padding: 20px;

        &__title {
            text-transform: uppercase;
            font-size: 20px;
            color: white;
            margin: 0 0 20px;
            font-family: sans-serif;
        }

        &__subtitle {
            text-transform: capitalize;
            font-size: 18px;
            margin: 0 0 30px;
            font-family: sans-serif;
        }

        & p {
            line-height: 1.6;
        }
    }
</style>

<script>
    module.exports = {
        data: function () {
            return {
                title: 'title',
                subtitle: 'lorem ipsum dolor est',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ducimus, eligendi fugiat ipsam itaque nam quia quo quod velit voluptatum!'
            }
        }
    }
</script>
