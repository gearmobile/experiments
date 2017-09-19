<template lang="pug">
  section.hero.is-medium
    .hero-body
      .container
        .columns.has-text-centered
          .column.is-6.is-offset-3
            h1.title.has-text-white
              | Введите номер телефона
            .field
              .control
                input.input.is-medium( type="text", placeholder="phone" )
            a.button
              | отправить
</template>

<script>
  export default {
    name: 'contact',
    data () {
      return {
        //
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hero {
    background-color: #662eff;
    // color: white;
  }
</style>

