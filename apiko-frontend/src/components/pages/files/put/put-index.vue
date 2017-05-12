<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Files Put Section
    q-tabs( slot="navigation" )
      q-tab( route="/files", exact, replace ) go back
      q-tab( route="/files/put/update", exact, replace ) file update
    
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
