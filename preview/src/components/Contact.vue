<template lang="pug">
  section.contact
    .container
      .columns.has-text-centered
        .column.is-6.is-offset-3
          h2.contact__title
            | Введите номер телефона
          .contact__field.field
            .contact__control.control
              input.contact__input.input.is-medium( type="text", placeholder="+7-___-___-___" )
          a.contact__button.button
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

  .contact {
    padding: 14rem 1.5rem;
    background-color: #662eff;

    &__title {
      color: white;
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.469;
    }

    &__field {
      margin-top: 6rem;
      margin-bottom: 6rem;
    }

    &__input {
      font-family: $family-monospace;
      color: white;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1;
      padding: 1.4rem 0;
      border-bottom: .1rem solid white;
    }

    &__button {
      text-transform: uppercase;
      font-family: $family-monospace;
      color:  #662eff;
      font-size: .75rem;
      font-weight: 500;
      line-height: 1.167;
      border-radius: .4rem;
      background-color: white;
    }

  }

</style>

