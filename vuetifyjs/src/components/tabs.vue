<template lang="pug">
  
  v-container( fluid )

    h2.text-xs-center
      | tabs

    // #1 TOOLBAR TABS

    h4.text-xs-right
      | #1 toolbar tabs

    v-layout
      v-flex( xs12 )
        v-tabs( dark, v-model="active" )
          v-tabs-bar( slot="activators" )
            v-tabs-item( v-for="(tab, index) in tabs", :key="index", :href="'#' + tab.title", ripple )
              | item {{ index + 1 }}
            v-tabs-slider.white
          v-tabs-content( v-for="tab in tabs", :key="tab", :id="tab.title" )
            v-card.py-4( flat )
              v-card-text.text-xs-center( v-text="tab.text" )
        div.text-xs-center.mt-2
          v-btn( primary, @click.native="nextTab()" )
            | next tab

    // #2 CENTERED TABS

    h4.text-xs-right
      | #2 centered tabs

    p.text-xs-right.mb-0
      | Tabs can be centered by using the <code>centered</code> prop.
    p.text-xs-right
      | Here we have also applied the <code>fixed</code> prop which gives all tab items a fixed size, regardless of content.

    v-layout
      v-flex( xs12 )
        v-tabs( dark, v-model="active1", centered, fixed )
          v-tabs-bar( slot="activators" )
            v-tabs-item( v-for="(tab, index) in tabs1", :key="index", :href="'#' + tab.title", ripple )
              | item {{ index + 1 }}
            v-tabs-slider.white
          v-tabs-content( v-for="tab in tabs1", :key="tab", :id="tab.title" )
            v-card.py-4( flat )
              v-card-text.text-xs-center( v-text="tab.text" )
        div.text-xs-center.mt-2
          v-btn( primary, @click.native="nextTab1()" )
            | next tab 1

    // #3 CONTENT

    h4.text-xs-right
      | #3 content

    p
      | Tabs are not the only thing you can put inside the v-tabs component. In this example we've also added a <code>toolbar</code>.

    v-layout
      v-flex( xs12 )
        v-tabs( dark, centered, fixed )
          // toolbar start --
          v-toolbar.teal( dark, extended )
            v-toolbar-side-icon
            v-spacer
            v-btn( icon )
              v-icon
                | search
            v-btn( icon )
              v-icon
                | more_vert
            v-toolbar-title.display-2( slot="extension" )
              | page title
            // toolbar end --
          v-tabs-bar( slot="activators" )
            v-tabs-item( v-for="(tab, index) in tabs2", :key="index", :href="'#' + tab.title", ripple )
              | item {{ index + 1 }}
            v-tabs-slider.white
          v-tabs-content( v-for="tab in tabs2", :key="tab", :id="tab.title" )
            v-card.py-4( flat )
              v-card-text.text-xs-center( v-text="tab.text" )

    h4.text-xs-right.mt-4
      | #4 with search

    v-layout
      v-flex( xs12 )
        v-tabs( dark, centered, fixed )
          // toolbar start --
          v-toolbar.green.lighten-2.py-3
            v-text-field( solo, label="search", prepend-icon="search", append-icon="keyboard_voice" )
          // toolbar end --
          v-tabs-bar( slot="activators" )
            v-tabs-item( v-for="(tab, index) in tabs3", :key="index", :href="'#' + tab.title", ripple )
              | item {{ index + 1 }}
            v-tabs-slider.white
          v-tabs-content( v-for="tab in tabs3", :key="tab", :id="tab.title" )
            v-card.py-4( flat )
              v-card-text.text-xs-center( v-text="tab.text" )

    h4.text-xs-right.mt-4
      | #5 icons

    p.text-xs-right
      | By using the <code>icons</code> prop you can add icons to each tab item

    v-layout
      v-flex( xs12 )
        v-tabs( dark, centered, fixed, icons )
          v-tabs-bar( slot="activators" )
            v-tabs-item( v-for="(tab, index) in tabs4", :key="index", :href="'#' + tab.title", ripple )
              v-icon
                | {{ tab.icon }}
              | {{ tab.name }}
            v-tabs-slider.white
          v-tabs-content( v-for="tab in tabs4", :key="tab", :id="tab.title" )
            v-card.py-4( flat )
              v-card-text.text-xs-center( v-text="tab.text" )

    h4.text-xs-right.mt-4
      | #6 desktop tabs

    v-layout
      v-flex( xs12 )
        v-tabs( dark, centered, fixed )
          // toolbar start --
          v-toolbar.teal( dark, extended )
            v-toolbar-side-icon
            v-toolbar-title.headline
              | page title
            v-spacer
            v-btn( icon )
              v-icon
                | search
            v-btn( icon )
              v-icon
                | more_vert
            // toolbar end --
          v-tabs-bar( slot="activators" )
            v-tabs-item( v-for="(tab, index) in tabs5", :key="index", :href="'#' + tab.title", ripple )
              v-icon
                | {{ tab.icon }}
            v-tabs-slider.orange
          v-tabs-content( v-for="tab in tabs5", :key="tab", :id="tab.title" )
            v-card.py-4( flat )
              v-card-text.text-xs-center( v-text="tab.text" )

</template>

<script>
  export default {
    data () {
      return {
        // FIRST PART
        active: 'tab-1',
        tabs: [
          {
            title: 'tab-1',
            text: 'tab 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: 'tab-2',
            text: 'tab 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: 'tab-3',
            text: 'tab 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ],
        // SECOND PART
        active1: 'tab-1',
        tabs1: [
          {
            title: 'tab-1',
            text: 'tab 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: 'tab-2',
            text: 'tab 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: 'tab-3',
            text: 'tab 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ],
        // TABS WITH CONTENT
        tabs2: [
          {
            title: 'tab-1',
            text: 'tab 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: 'tab-2',
            text: 'tab 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: 'tab-3',
            text: 'tab 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ],
        // SEARCH FIELD
        tabs3: [
          {
            title: 'tab-1',
            text: 'tab 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: 'tab-2',
            text: 'tab 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: 'tab-3',
            text: 'tab 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ],
        // ICON FIELD
        tabs4: [
          {
            title: 'tab-1',
            icon: 'phone',
            name: 'recents',
            text: 'tab 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: 'tab-2',
            icon: 'favorite',
            name: 'favorites',
            text: 'tab 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: 'tab-3',
            icon: 'account_box',
            name: 'nearby',
            text: 'tab 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ],
        // DESKTOP ICONS
        tabs5: [
          {
            title: 'tab-1',
            icon: 'phone',
            name: 'recents',
            text: 'tab 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: 'tab-2',
            icon: 'favorite',
            name: 'favorites',
            text: 'tab 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          },
          {
            title: 'tab-3',
            icon: 'account_box',
            name: 'nearby',
            text: 'tab 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          }
        ]
      }
    },
    methods: {
      nextTab () {
        const index = ((this.tabs.indexOf(this.tabs.find(el => el.title === this.active)) + 1)) % this.tabs.length
        this.active = this.tabs[index].title
      },
      nextTab1 () {
        const index = ((this.tabs1.indexOf(this.tabs1.find(el => el.title === this.active1)) + 1)) % this.tabs1.length
        this.active1 = this.tabs1[index].title
      }
    }
  }
</script>
