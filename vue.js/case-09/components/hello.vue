<template>
    <h2 class="caption">{{ msg }}</h2>
</template>

<style>
    .caption {
        text-transform: capitalize;
        text-align: center;
        color: firebrick;
        font-size: 30px;
    }
</style>

<script>
    module.exports = {
        data: function () {
            return {
                msg: 'hello world!'
            }
        }
    }
</script>