<template lang="pug">
  
  v-container( fluid )

    h2.text-xs-center
      | breadcrumbs

    h4.text-xs-right.mt-3
      | #1 text dividers

    v-layout
      v-flex( xs12 )
        v-breadcrumbs( divider="/" )
          v-breadcrumbs-item( v-for="breadcrumb in breadcrumbs", :key="breadcrumb", :disabled="breadcrumb.status" )
            | {{ breadcrumb.name }}

    v-layout
      v-flex( xs12 )
        v-breadcrumbs( divider="-" )
          v-breadcrumbs-item( v-for="breadcrumb in breadcrumbs", :key="breadcrumb", :disabled="breadcrumb.status" )
            | {{ breadcrumb.name }}

    h4.text-xs-right.mt-3
      | #2 icon dividers

    v-layout
      v-flex( xs12 )
        v-breadcrumbs( icons, divider="forward" )
          v-breadcrumbs-item( v-for="item in breadcrumbs", :key="item", :disabled="item.status" )
            | {{ item.name }}

    v-layout
      v-flex( xs12 )
        v-breadcrumbs( icons, divider="chevron_right" )
          v-breadcrumbs-item( v-for="item in breadcrumbs", :key="item", :disabled="item.status" )
            | {{ item.name }}

</template>

<script>
  export default {
    data () {
      return {
        breadcrumbs: [
          { name: 'primo', status: false },
          { name: 'secondo', status: false },
          { name: 'tetro', status: false },
          { name: 'quattro', status: false },
          { name: 'cinque', status: false }
        ]
      }
    }
  }
</script>
