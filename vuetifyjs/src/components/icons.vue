<template lang="pug">
  
  v-container( fluid )

    h2.text-xs-center
      | icons

    v-layout.mb-2( justify-space-around )
        
        span.group.pa-2
          v-icon( standart )
            | home
          v-icon( medium )
            | event
          v-icon( large )
            | info
        
        span.group.pa-2.teal
          v-icon( dark )
            | home
          v-icon( dark, medium )
            | event
          v-icon( dark, large )
            | info

    v-layout.mb-2( justify-space-around )

      span.group.pa-2
        v-icon( fa )
          | lock
        v-icon( fa )
          | search
        v-icon( fa )
          | edit

    v-layout.mb-2( justify-space-around )

      span.group.pa-2
        v-icon.orange--text( mdi )
          | watch
        v-icon.blue--text.text--darken-2( mdi )
          | tennis
        v-icon.green--text( mdi )
          | tilde

</template>

<script>
  import '../../node_modules/font-awesome/css/font-awesome.css'
  import '../../node_modules/mdi/css/materialdesignicons.css'

  export default {
    //
  }
</script>
