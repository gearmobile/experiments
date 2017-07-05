<template lang="pug">
  
  v-container( fluid )

    h2.text-xs-center
      | footer

    v-layout
      v-flex( xs12 )
        v-footer.pa-2
          v-spacer
          div
            | &copy; {{ year }}

</template>

<script>
  export default {
    computed: {
      year () {
        return new Date().getFullYear()
      }
    }
  }
</script>

