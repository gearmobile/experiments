<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Stats Section
    q-tabs( slot="navigation" )
      q-tab( route="/", exact, replace ) go back
      q-tab( route="/stats/stats", exact, replace ) get apiko stats
    
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
