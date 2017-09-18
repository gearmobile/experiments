<template lang="pug">
  section.hero.is-medium
    .hero-body
      .container
        .columns
          .column
            h1.title
              | введите номер телефона
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

