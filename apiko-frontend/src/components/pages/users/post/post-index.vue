<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Users Post Section
    q-tabs( slot="navigation" )
      q-tab( route="/users", exact, replace ) go back
      q-tab( route="/users/post/add", exact, replace ) user add
      q-tab( route="/users/post/login", exact, replace ) user login
      q-tab( route="/users/post/password-check", exact, replace ) password check
      q-tab( route="/users/post/password-reset", exact, replace ) password reset
    
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
