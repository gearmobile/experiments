<template lang="pug">
  
  v-container

    h2
      | simple static alerts

    v-layout
      v-flex( xs12 )
        v-alert( success, :value="true" )
          | This is a success alert
    
    v-layout
      v-flex( xs12 )
        v-alert( info, :value="true" )
          | This is a info alert

    v-layout
      v-flex( xs12 )
        v-alert( warning, :value="true" )
          | This is a warning alert

    v-layout
      v-flex( xs12 )
        v-alert( error, :value="true" )
          | This is a error alert

    h2
      | closable alert

    v-layout
      v-flex( xs12 )
        v-alert( info, dismissible, v-model="alert" )
          | This is a success alert that is closable
    
    v-layout
      v-flex( xs12 )
        v-btn( primary, dark, v-if="!alert", @click.native="alert = true" )
          | Reset

    h2
      | custom icon / no icon

    v-layout
      v-flex( xs12 )
        v-alert( success, icon="new_releases", :value="true" )
          | This is a success alert with a custom icon
    
    v-layout
      v-flex( xs12 )
        v-alert( info, hide-icon, :value="true" )
          | This is an error alert with no icon

</template>

<script>
  export default {
    data () {
      return {
        alert: true
      }
    }
  }
</script>

<style lang="stylus">
  //
</style>
