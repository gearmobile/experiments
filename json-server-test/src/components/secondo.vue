<template lang="pug">
  v-card.blue.darken-1
    v-card-title
      h3.headline.mb-0.white--text
        | Axios methods
    v-card-text.white--text
      p
        | Использование Axios для отправки запросов на локальный сервер JSON-Server
    v-card-actions
      v-btn.white--text( flat, @click.native="onGet()" )
        | get resource
      v-btn.white--text( flat, @click.native="onPost()" )
        | post resource
      v-btn.white--text( flat, @click.native="onDelete(2)" )
        | delete resource
      v-btn.white--text( flat, @click.native="onFilter(4)" )
        | filter resource
</template>

<script>
  import axios from 'axios'
  const root = 'http://localhost:3000'

  export default {
    name: 'secondo',
    methods: {
      onGet () {
        //
      },
      onPost () {
        //
      },
      onDelete () {
        //
      },
      onFilter () {
        //
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>
