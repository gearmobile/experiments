<template lang="pug">
  q-layout

    // NAVIGATION SECTION
    .toolbar( slot="header" )
      q-toolbar-title( :padding="1" ) File Update
    q-tabs( slot="navigation" )
      q-tab( route="/files/put", exact, replace ) go back

    // CONTAINER SECTION
    .row.gutter.auto
      .layout-view
        .layout-padding

          // INPUT SECTION
          .card.auto
            .card-title.bg-secondary.text-white file update
            .card-content
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model.trim="file.id", pattern="^\d{1,10}$", required )
                  label file id
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model.trim="file.mime" )
                  label file type
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model.trim="file.name" )
                  label file name
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model.trim="file.size" )
                  label file size
              p.caption
                .stacked-label
                  input.full-width( type="text", v-model.trim="file.owner" )
                  label file owner
              button.full-width.secondary.raised( @click="onSubmit" ) update file
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        file: {
          id: null,
          mime: null,
          name: null,
          size: null,
          owner: null
        }
      }
    },
    methods: {
      onSubmit () {
        if (!this.file.id) {
          console.log('The field should not be empty!')
          return false
        }
        else {
          axios.put('http://localhost:5000/files/' + this.file.id)
            .then(response => {
              console.log(response)
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
    }
  }
</script>

<style lang="scss">
  .card {
    & .card-title,
    & label {
      text-transform: capitalize;
    }
  }
</style>
