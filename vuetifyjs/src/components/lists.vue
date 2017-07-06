<template lang="pug">
  
  v-container( fluid )

    h2.display-2.text-xs-center
      | lists

    v-layout
      v-flex( xs12 )
        v-list( two-line )
          v-list-tile( v-for="(item, index) in items", :key="index", avatar )
            v-list-tile-avatar
              img( :src='path(item.avatar)', :alt='item.name' )
            v-list-tile-content
              v-list-tile-title( v-text="item.title" )
              v-list-tile-sub-title( v-text="item.subtitle" )

</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            avatar: 'avatar1',
            name: 'name1',
            title: 'title 1',
            subtitle: 'subtitle 1'
          },
          {
            avatar: 'avatar2',
            name: 'name2',
            title: 'title 2',
            subtitle: 'subtitle 2'
          },
          {
            avatar: 'avatar3',
            name: 'name3',
            title: 'title 3',
            subtitle: 'subtitle 3'
          }
        ]
      }
    },
    methods: {
      path (value) {
        return require('../assets/' + value + '.jpg')
      }
    }
  }
</script>

