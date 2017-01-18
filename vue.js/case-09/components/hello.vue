<template>
    <h1>{{ message }}</h1>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                message: 'Hello from Vue.js'
            }
        }
    }
</script>

<style>
    h1 {
        font-size: 30px;
        text-transform: capitalize;
        text-align: center;
    }
</style>