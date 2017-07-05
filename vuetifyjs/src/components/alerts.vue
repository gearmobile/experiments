<template lang="pug">
  
  v-container( fluid )

    h2.text-xs-center
      | alerts

    h4.text-xs-right
      | #1 contextual

    v-layout
      v-flex( xs12 )
        v-alert( success, :value="true" )
          | this is a success alert

    v-layout
      v-flex( xs12 )
        v-alert( info, :value="true" )
          | this is a info alert

    v-layout
      v-flex( xs12 )
        v-alert( warning, :value="true" )
          | this is a warning alert

    v-layout
      v-flex( xs12 )
        v-alert( error, :value="true" )
          | this is a error alert

    h4.text-xs-right.mt-3
      | #2 closable

    v-layout
      v-flex( xs12 )
        v-alert( info, dismissible, v-model="alert" )
          | this is a info alert that is closable

    v-layout
      v-flex.text-xs-center( xs12 )
        v-btn( v-if="!alert", primary, light, @click.native="alert = !alert" )
          | reset alert

    h4.text-xs-right.mt-3
      | #3 custom icon / no icon

    v-layout
      v-flex( xs12 )
        v-alert( success, hide-icon, :value="true" )
          | this is an success alert with no icon

    v-layout
      v-flex( xs12 )
        v-alert( success, icon="new_releases", :value="true" )
          | this is a success alert with a custom icon

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
