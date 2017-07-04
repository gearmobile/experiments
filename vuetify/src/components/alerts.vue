<template lang="pug">
  
  v-container( fluid )

    h2.text-xs-center
      | alerts

    h4.text-xs-right
      | #1 Contextual

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

    h4.text-xs-right.mt-3
      | #2 Closable

    v-layout
      v-flex( xs12 )
        v-alert( info, dismissible, v-model="alert" )
          | This is a info alert that is closable

    v-layout
      v-flex.text-xs-center( xs12 )
        v-btn( v-if="!alert", primary, light, @click.native="alert = !alert" )
          | reset alert

    h4.text-xs-right.mt-3
      | #3 Custom Icon / No Icon

    v-layout
      v-flex( xs12 )
        v-alert( success, hide-icon, :value="true" )
          | This is an success alert with no icon

    v-layout
      v-flex( xs12 )
        v-alert( success, icon="new_releases", :value="true" )
          | This is a success alert with a custom icon

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
