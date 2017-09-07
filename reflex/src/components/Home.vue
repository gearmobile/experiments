<template lang="pug">
  section.wrapper
    h2
      | basic example
    section.grid
      article.grid__col-3
        p
          | Reflex falls back to an inline-block grid for browsers that do not support flexbox. Reflex uses some css hacks to help the inline-block grid work on older browsers. It's important to note that some of the features of flexbox do not have an equivalent in the inline-block fallback so not everything will work in the fallback, but your grid will remain intact.
      article.grid__col-3
        p
          | Reflex gives you the ability to easily take advantage of flexbox for laying out a grid while having a reliable inline-block fallback for older browsers.
      article.grid__col-3
        p
          | At the time of writing, global flexbox support is at 94.1% (excluding browsers with outdated or partial support) so I propose that it's time to start taking advantage of flexbox and accept that the inline-block fallback won't support everything.
      article.grid__col-3
        p
          | Where flexbox isn't supported, your basic grid structure will remain intact and most of the layout classes still work. Try this page out in a non-flexbox browser to see for yourself!

    h2
      | breakpoints
    section.grid
      article.grid__col-12.grid__col-xs-6.grid__col-md-3.test
        p
          | Reflex gives you the ability to easily take advantage of flexbox for laying out a grid while having a reliable inline-block fallback for older browsers
      article.grid__col-12.grid__col-xs-6.grid__col-md-3.test
        p
          | Reflex gives you the ability to easily take advantage of flexbox for laying out a grid while having a reliable inline-block fallback for older browsers
      article.grid__col-12.grid__col-xs-6.grid__col-md-3.test
        p
          | Reflex gives you the ability to easily take advantage of flexbox for laying out a grid while having a reliable inline-block fallback for older browsers
      article.grid__col-12.grid__col-xs-6.grid__col-md-3.test
        p
          | Reflex gives you the ability to easily take advantage of flexbox for laying out a grid while having a reliable inline-block fallback for older browsers

    
    
    h2
      | Auto columns
    section.grid( style="margin-bottom: 1rem" )
      article.grid__col-auto
        p
          | Reflex gives you the ability to easily take advantage of flexbox for laying out a grid while having a reliable inline-block fallback for older browsers
      article.grid__col-auto
        p
          | At the time of writing, global flexbox support is at 94.1% (excluding browsers with outdated or partial support) so I propose that it's time to start taking advantage of flexbox and accept that the inline-block fallback won't support everything
      article.grid__col-auto
        p
          | Where flexbox isn't supported, your basic grid structure will remain intact and most of the layout classes still work. Try this page out in a non-flexbox browser to see for yourself!

    section.grid
      article.grid__col-12.grid__col-sm-auto
        h4
          | grid__col-sm-auto
        p
          | You can add any number of auto sizing grid__col-auto columns to a grid and therefore avoid using numbered columns. You can also use the regular breakpoints to determine when your columns revert to 100% width. A grid built using auto columns will not remain fully intact in the inline-block fallback and will not work properly in ie10 due to it's limited flexbox support but if this is a concern, you could use JavaScript for that.
      article.grid__col-12.grid__col-sm-auto
        h4
          | grid__col-sm-auto
        p
          | You can add any number of auto sizing grid__col-auto columns to a grid and therefore avoid using numbered columns. You can also use the regular breakpoints to determine when your columns revert to 100% width. A grid built using auto columns will not remain fully intact in the inline-block fallback and will not work properly in ie10 due to it's limited flexbox support but if this is a concern, you could use JavaScript for that.
      article.grid__col-md-auto
        h4
          | grid__col-md-auto
        p
          | You can add any number of auto sizing grid__col-auto columns to a grid and therefore avoid using numbered columns. You can also use the regular breakpoints to determine when your columns revert to 100% width. A grid built using auto columns will not remain fully intact in the inline-block fallback and will not work properly in ie10 due to it's limited flexbox support but if this is a concern, you could use JavaScript for that.


</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="stylus" scoped>

  article
    background-color lightgreen
    // padding 1rem

  .test
    border .01rem solid rgba( 0,0,0, .3 )
    border-radius .2rem

</style>
