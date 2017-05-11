<template lang="pug">
  q-layout
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Apiko
    q-tabs( slot="navigation" )
      q-tab( route="/users", exact, replace ) users
      q-tab( route="/files", exact, replace ) files
      q-tab( route="/setup", exact, replace ) setup
      q-tab( route="/core", exact, replace ) core
      q-tab( route="/stats", exact, replace ) stats
      q-tab( route="/reference", exact, replace ) reference
</template>

<script>
  //
</script>

<style lang="styl">
  /**/
</style>
