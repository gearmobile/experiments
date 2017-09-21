<template lang="pug">

  section.demo

    .container
      
      // demo navigation
      .demo__nav.columns
        .column.is-5-mobile.is-offset-7-mobile.is-3-tablet.is-offset-9-tablet
          .block
      
      // demo content
      .demo__content.columns
        
        // left column
        .column.is-12-mobile.is-3
          .block
        
        // right column
        .column.is-12-mobile.is-9
          .demo__items.columns
            
            // item
            .column.item
              figure.item__icon
                img( src="#" )
              p.item__content
                | You can nest columns to have more flexibility in your design. You only need to follow this structure
              figure.item__arrow
            
            // item
            .column.item
              figure.item__icon
                img( src="#" )
              p.item__content
                | You can nest columns to have more flexibility in your design. You only need to follow this structure
              figure.item__arrow
            
            // item
            .column.item
              figure.item__icon
                img( src="#" )
              p.item__content
                | You can nest columns to have more flexibility in your design. You only need to follow this structure
              figure.item__arrow
      
      // demo goto
      .demo__goto.columns
        .column.is-5-mobile.is-3
          .block

</template>

<script>
  export default {
    //
  }
</script>

<style lang="scss" scoped>
  .demo {
    padding: 14rem 1.5rem;
  }
  
  .item {
    padding: 1rem 4rem 1rem 1rem;
    position: relative;
    outline: 1px solid #000;
    // border: 1px solid #000;

    &__icon {
      width: 100%;
      height: 50px;
      margin-bottom: 2rem;
      background-color: maroon;
    }

    &__content {
      color: rgba( 0,0,0, .4 )
    }

    &__arrow {
      width: 2rem;
      height: 1rem;
      background-color: blue;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%)
    }
  }
  
  .block {
    height: 50px;
    background-color: cyan;

    &--small {
      background-color: maroon;
    }

  }
</style>

