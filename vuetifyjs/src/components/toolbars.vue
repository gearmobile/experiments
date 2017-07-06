<template lang="pug">

  v-container( fluid )

    h2.display-2.text-xs-center
      | toolbars

    h4.text-xs-right
      | #1 default

    p.mb-0.text-xs-right.px-4.green--text.darken-2
      | A toolbar is a flexible container that can be utilized in a number of ways. By default, the toolbar is 64px high on desktop, 56px high on mobile portrait and 48px high on mobile landscape. These can be overwritten using the dense and prominent props

    v-layout( row )
      v-flex( xs12 )
        v-toolbar
          v-toolbar-title
            | title
          v-spacer
          v-toolbar-side-icon.hidden-md-and-up
          v-toolbar-items.hidden-sm-and-down
            v-btn( flat )
              | primo
            v-btn( flat )
              | secondo
            v-btn( flat )
              | tetro

    // APP BAR
    
    h4.text-xs-right
      | #2 app bar

    p.mb-3.text-xs-right.px-4.green--text.darken-2
      | An App bar is the primary toolbar of your application. It can contain icons, menus and more

    v-layout
      v-flex( xs12 )
        v-toolbar.teal( dark )
          v-toolbar-side-icon
          v-toolbar-title
            | app bar title
          v-spacer
          v-btn( icon ): v-icon search
          v-btn( icon ): v-icon apps
          v-btn( icon ): v-icon refresh
          v-btn( icon ): v-icon more_vert

    // APPBAR WITH EXTENSION

    h4.text-xs-right
      | #3 app bar with extension

    p.mb-3.text-xs-right.px-4.green--text.darken-2
      | An extension can be used that creates a much more <strong>prominent</strong> bar. If a title is placed within the <strong>extension</strong>, it will automatically be shifted to the right to match the normal locationit would be at in the main bar

    v-layout
      v-flex
        v-toolbar.orange( dark )
          v-toolbar-side-icon
          v-toolbar-title.white--title( slot='extension' )
            | app title
          v-spacer
          v-btn( icon ): v-icon search
          v-btn( icon ): v-icon apps
          v-btn( icon ): v-icon refresh
          v-btn( icon ): v-icon more_vert


</template>

<script>
  export default {
    //
  }
</script>
