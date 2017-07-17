<template lang="pug">
  v-card
    v-card-title
      h3.headline.mb-0
        | jQuery methods
    v-card-text
      //
    v-card-actions
      v-btn.teal( flat, @click.native="onGet()" )
        | get resource
      v-btn.teal( flat, @click.native="onPost()" )
        | post resource
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
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>

