<template lang="pug">
  q-layout
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) Apiko
    q-tabs( slot="navigation" )
      q-tab( route="/get-users-list", exact, replace ) user list
      q-tab( route="/get-user-profile", exact, replace ) user profile
      q-tab( route="/register", exact, replace ) register new user
      q-tab( route="/check-user", exact, replace ) check user
      q-tab( route="/login", exact, replace ) login
</template>

<script>

</script>

<style lang="styl">

</style>
