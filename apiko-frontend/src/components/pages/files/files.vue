<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Files Section
    q-tabs( slot="navigation" )
      q-tab( route="/", exact, replace ) go back
      q-tab( route="/files/get", exact, replace ) get
      q-tab( route="/files/post", exact, replace ) post
      q-tab( route="/files/put", exact, replace ) put
      q-tab( route="/files/delete", exact, replace ) delete
    
    // CONTAINER SECTION
    .row.gutter.auto
      .layout-view
        .layout-padding

</template>

<script>
export default {
  //
}
</script>

<style lang="styl">
  /**/
</style>
