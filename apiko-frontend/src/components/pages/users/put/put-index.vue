<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Users Put Section
    q-tabs( slot="navigation" )
      q-tab( route="/users", exact, replace ) go back
      q-tab( route="/users/put/update", exact, replace ) user update
    
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
