<template lang="pug">
  section.hero.is-medium
    .hero-body
      .container
        .columns
          .column.is-3
            h1.title.is-1
              | demo taxi
            h2.subtitle.is-3
              | принцип работы
            nav.panel
              a( href="#" )
                | перейти к демонстрации
          .column.is-9
            .columns
              .column
                span.icon.is-large
                  i.fa.fa-male.fa-3x( aria-hidden="true" )
                p
                  | клиент оформляет заявку на сайте
              .column
                span.icon.is-large
                  i.fa.fa-android.fa-3x( aria-hidden="true" )
                p
                  | робот перезванивает таксисту
              .column
                span.icon.is-large
                  i.fa.fa-car.fa-3x( aria-hidden="true" )
                p
                  | не более 2 минут между обращением клинета и связью с таксистом
</template>

<script>
  export default {
    name: 'hero'
    //
  }
</script>

<style lang="scss" scoped>
  //
</style>

