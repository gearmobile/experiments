<template lang="pug">

  section.demo

    .container
      
      // demo navigation
      .demo__nav.columns
        .column.has-text-right( style="background-color: cyan" )
          a( href="#" )
            | в каталог демо-версий
      
      // demo caption
      .demo__caption.columns( style="background-color: cyan" )
        .column
          h1.demo__title
            | Demo taxi
      
      // demo content
      .demo__content.columns.is-desktop
        
        // left column
        .column.is-12-mobile.is-4-desktop
          h2.demo__subtitle
            | Принцип работы
          p.demo__text
            | Это робот-деспетчер, собранный на технологиях Voximplant, сможет принять заказ любого клиента, поймет, куда подать машину, во сколько, каково место назначения, а также распознаст такие места, как: дом, работа или название ресторана.
        
        // right column
        .column.is-12-mobile.is-7-desktop.is-offset-1-desktop
          .demo__items.columns
            
            // item
            .column.item
              figure.item__icon
                img( src="../assets/icon-demo-01.png" )
              p.item__content
                | Клиент оформляет заявку на сайте
              img.item__arrow( src="../assets/icon-arrow.png" )
            
            // item
            .column.item
              figure.item__icon
                img( src="../assets/icon-demo-02.png" )
              p.item__content
                | Робот перезванивает таксисту
              img.item__arrow( src="../assets/icon-arrow.png" )
            
            // item
            .column.item
              figure.item__icon
                img( src="../assets/icon-demo-03.png" )
              p.item__content
                | Не более 2 минут, между обращением клиента и связью с таксистом
      
      // demo goto
      .demo__goto.columns
        .column( style="background-color: cyan" )
          img.icon-scroll( src="../assets/icon-scroll-down.png" )
          a.demo__link( href="#" )
            | перейти к демонстрации

</template>

<script>
  export default {
    //
  }
</script>

<style lang="scss" scoped>

  .demo {
    padding: 14rem 1.5rem;

    &__nav {
      margin-bottom: 14rem;
    }

    &__caption {
      margin-bottom: 3rem;
    }

    &__title {
      color:  #1c0b43;
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.175;
    }

    &__subtitle {
      color: #1c0b43;
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.469;
      margin-bottom: 2rem;
      margin-top: calc(-0.75rem * 2);
    }

    &__link {
      color:  #662eff;
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 1.167;
      text-transform: uppercase;
    }

    &__text {
      color:  #1c0b43;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.75;
    }

    &__goto {
      margin-top: 2rem;

      & .column {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      & .icon-scroll {
        margin-right: 2rem;
      }
    }
  }
  
  .item {
    padding: 1rem 4rem 1rem 1rem;
    position: relative;
    outline: 1px solid #000;

    &__icon {
      width: 100%;
      height: 90px;
      margin-bottom: 1rem;
    }

    &__content {
      color: rgba( 0,0,0, .4 )
    }

    &__arrow {
      width: 88px;
      height: 8px;
      position: absolute;
      top: 20%;
      right: 5%;
    }
  }
  
</style>

