<template lang="pug">
  v-card.blue-grey.darken-1
    v-card-title
      h3.headline.mb-0.white--text
        | jQuery methods
    v-card-text.white--text
      p
        | Использование jQuery для отправки запросов на локальный сервер JSON-Server
    v-card-actions
      v-btn.teal--text( flat, @click.native="onGet()" )
        | get resource
      v-btn.orange--text( flat, @click.native="onPost()" )
        | post resource
      v-btn.red--text( flat, @click.native="onDelete(2)" )
        | delete resource
      v-btn.amber--text.darken-3( flat, @click.native="onFilter(4)" )
        | filter resource
      v-btn.blue--text( flat, @click.native="onJSONP(10)" )
        | JSONP request
</template>

<script>

  import $ from 'jquery'
  const root = 'http://localhost:3000'

  export default {
    name: 'primo',
    methods: {
      onGet () {
        $.ajax(root + '/posts', {
          method: 'GET'
        }).then(data => {
          console.log(data)
        })
      },
      onPost () {
        const newPost = {
          id: 101,
          userId: 10,
          title: 'new post from jquery',
          body: 'this post created by jquery method'
        }
        $.ajax(root + '/posts', {
          method: 'POST',
          data: newPost
        }).then(data => {
          console.log(data)
        })
      },
      onDelete (value) {
        $.ajax(root + '/posts/' + value, {
          method: 'DELETE'
        })
      },
      onFilter (value) {
        $.ajax(root + '/posts/?userId=' + value)
          .then(data => {
            console.log(data)
          })
      },
      onJSONP (value) {
        $.ajax(root + '/posts/' + value, {
          dataType: 'jsonp'
        }).then(data => {
          console.log(data)
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>

