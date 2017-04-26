<template lang="pug">
  q-layout
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Apiko
    q-tabs( slot="navigation" )
      q-tab( route="/login", exact, replace ) login
      q-tab( route="/register", exact, replace ) register
</template>

<script>

</script>

<style lang="styl">

</style>
