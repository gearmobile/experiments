<template lang="pug">
  footer.footer
    .container
      .columns
        .column.footer__logo.is-3-tablet
          figure.image.is-32x32
            img( src="../assets/footer-logo.png" )
          a.footer__link.is-primary.is-5( href="#" )
            | voximplant
        .column.footer__content.is-3.is-offset-6
          p.footer__text
            | Zingaya, Inc.#[br]2225 East Bayshore Road, Palo Alto,#[br]CA 94303-3220
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
        //
      }
    }
  }
</script>

<style lang="scss" scoped>
  
  .footer {
    padding: 4rem 1.5rem;
    background-color: transparent;
    // border-top: 1px solid $grey-light
    border-top: 1px solid #e0e4ea;

    &__logo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    &__link {
      color:  #8b61ff;
      font-size: 1.5rem;
      font-weight: 500;
      margin-left: 0.6rem;
    }

    &__text {
      color: #9ba9bb;
      font-size: .875rem;
      font-weight: 400;
      line-height: 1.143;
    }
  }

</style>

