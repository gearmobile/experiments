<template lang="pug">
  section.demo
    .container
      
      // NAV SECTION
      .demo__nav.columns
        .column.is-3.is-offset-9
          a.demo__link( href="#" )
            | в каталог демо-версий
      
      // CONTENT SECTION
      .columns
        .column.is-3
          h1.demo__title
            | demo taxi
          h2.demo__subtitle
            | принцип работы
          p
            | Это робот-деспетчер, собранный на технологиях Voximplant, сможет принять заказ любого клиента, поймет, куда подать машину, во сколько, каково место назначения, а также распознаст такие места, как: дом, работа или название ресторана.
          nav.panel
            a( href="#" )
              | перейти к демонстрации
        .column.is-9
          .columns
            .column
              span.icon.is-large
                i.fa.fa-male.fa-3x( aria-hidden="true" )
              p
                | Клиент оформляет заявку на сайте
            .column
              span.icon.is-large
                i.fa.fa-android.fa-3x( aria-hidden="true" )
              p
                | Робот перезванивает таксисту
            .column
              span.icon.is-large
                i.fa.fa-car.fa-3x( aria-hidden="true" )
              p
                | Не более 2 минут, между обращением клиента и связью с таксистом

      // GOTO SECTION
      .demo__goto.columns
        .column.is-3
          figure
            img( src="#" )
          a.demo__link( href="#" )
            | перейти к демонстрации
</template>

<script>
  export default {
    name: 'demo'
    //
  }
</script>

<style lang="scss" scoped>

  .demo {
    padding: 4rem 0 0 0;

    &__nav {
      margin-bottom: 14rem;
    }

    &__link {
      font-family: $family-monospace;
      color:  #662eff;
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 1.167;
    }

    &__title {
      color:  #1c0b43;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.175;
      margin-bottom: 3rem;
    }

    &__subtitle {
      color: #1c0b43;
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.469;
      margin-bottom: 3rem;
    }

    &__goto {
      margin-top: 5rem;

      &__column {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
</style>

