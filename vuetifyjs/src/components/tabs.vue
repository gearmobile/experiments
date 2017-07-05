<template lang="pug">
  
  v-container( fluid )

    h2.text-xs-center
      | tabs

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

</template>

<script>
  export default {
    data () {
      return {
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
        ]
      }
    },
    methods: {
      nextTab () {
        const index = ((this.tabs.indexOf(this.tabs.find(el => el.title === this.active)) + 1)) % this.tabs.length
        this.active = this.tabs[index].title
      }
    }
  }
</script>
