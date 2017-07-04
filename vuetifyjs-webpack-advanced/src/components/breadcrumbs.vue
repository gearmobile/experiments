<template lang="pug">
  
  v-container

    v-layout
      v-flex( xs12 )
        v-breadcrumbs( divider="/" )
          v-breadcrumbs-item( v-for="item in items", :key="item", :disabled="item.disabled" )
            | {{ item.title }}

    v-layout
      v-flex( xs12 )
        v-breadcrumbs( divider="-" )
          v-breadcrumbs-item( v-for="item in items", :key="item", :disabled="item.disabled" )
            | {{ item.title }}

    v-layout
      v-flex( xs12 )
        v-breadcrumbs( icons, divider="forward" )
          v-breadcrumbs-item( v-for="item in items", :key="item", :disabled="item.disabled" )
            | {{ item.title }}

    v-layout
      v-flex( xs12 )
        v-breadcrumbs( icons, divider="chevron_right" )
          v-breadcrumbs-item( v-for="item in items", :key="item", :disabled="item.disabled" )
            | {{ item.title }}

</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'primo', disabled: false },
          { title: 'secondo', disabled: false },
          { title: 'tetro', disabled: false },
          { title: 'quattro', disabled: false },
          { title: 'cinque', disabled: true }
        ]
      }
    }
  }
</script>

<style lang="stylus">
  //
</style>
