<template>
    <section class="contacts">
        <h1 class="contacts__title">section contacts</h1>
    </section>
</template>

<script>
    export default {
      name: 'contacts'
    }
</script>

<style scoped>
    .contacts {
        background-color: paleturquoise;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .contacts__title {
        text-transform: uppercase;
        font-size: 60px;
    }
</style>