<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Users Section
    q-tabs( slot="navigation" )
      q-tab( route="/", exact, replace ) go back
      q-tab( route="/users/get", exact, replace ) get
      q-tab( route="/users/post", exact, replace ) post
      q-tab( route="/users/put", exact, replace ) put
      q-tab( route="/users/delete", exact, replace ) delete
    
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
