<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Users Get Section
    q-tabs( slot="navigation" )
      q-tab( route="/users", exact, replace ) go back
      q-tab( route="/users/get/list", exact, replace ) users list
      q-tab( route="/users/get/profile", exact, replace ) user profile
      q-tab( route="/users/get/check", exact, replace ) user check
    
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
