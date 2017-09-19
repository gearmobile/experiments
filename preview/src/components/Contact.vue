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
                input.input.is-medium( type="text", placeholder="+7-___-___-___" )
            a.button.is-uppercase.is-outlined
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
  // $blue-dark: #662eff;
  .hero {
    background-color: #662eff;
    // @include linear-gradient($lg_blue_From, $lg_blue_To);
    // color: white;
  }
</style>

