<template lang="jade">
    h2.heading
        {{ msg }}
</template>

<script>
    module.exports = {
        data: function () {
            return {
                msg: 'hello from vue.js'
            }
        }
    };
</script>

<style lang="sass">
    .heading {
        text-transform: capitalize;
        color: cornflowerblue;
        font-size: 30px;
        font-family: sans-serif;
        margin: 10px 0 30px;
        text-align: center;
    }
</style>