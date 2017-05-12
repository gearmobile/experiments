<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Files Delete Section
    q-tabs( slot="navigation" )
      q-tab( route="/files", exact, replace ) go back
      q-tab( route="/files/delete/delete", exact, replace ) file delete
    
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
