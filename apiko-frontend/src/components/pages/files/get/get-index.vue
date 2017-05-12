<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Files Get Section
    q-tabs( slot="navigation" )
      q-tab( route="/files", exact, replace ) go back
      q-tab( route="/files/get/file", exact, replace ) get file
      q-tab( route="/files/get/files-list", exact, replace ) get files list
    
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
