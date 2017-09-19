<template lang="pug">
  section.hero.is-medium
    a.hero__link.is-uppercase( href="#" )
      | в каталог демо-версий
    .hero-body
      .container
        .columns
          .column.is-3
            h1.title.is-1
              | demo taxi
            h2.subtitle.is-3
              | принцип работы
            p
              | Это робот-диспечер, собранный на технологиях Voximplant, сможет принять заказ любого клиента, поймет, куда подать машину, во сколько, каково место назначения, а также сможет распознать такие места, как: дом, работа или название ресторана. 
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
  .hero {
    position: relative;

    &__link {
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
  }
</style>

