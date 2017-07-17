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
      v-btn.white--text( flat, @click.native="onDelete(punto)" )
        | delete resource
      v-btn.white--text( flat, @click.native="onFilter(punto)" )
        | filter resource
      v-spacer
      v-select( :items="puntos", label="Select ID here ...", item-text="name", item-value="status", v-model="punto" )
</template>

<script>
  import axios from 'axios'
  const root = 'http://localhost:3000'

  export default {
    name: 'secondo',
    data () {
      return {
        length: 100,
        puntos: [],
        punto: null
      }
    },
    methods: {
      onGet () {
        axios.get(root + '/albums')
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.log(error)
          })
      },
      onPost () {
        const newPost = {
          "userId": 11,
          "id": 101,
          "title": "added by axios"
        }
        axios.post(root + '/albums', newPost)
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.log(error)
          })
      },
      onDelete (value) {
        axios.delete(root + '/albums/' + value)
          .then(response => {
            console.log(response.status)
            console.log(response.statusText)
          })
          .catch(error => {
            console.log(error)
          })
      },
      onFilter (value) {
        axios.get(root + '/albums/?userId=' + value)
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.log(error)
          })
      },
      initArray () {
        for (let i = 1; i < this.length; i += 1) {
          this.puntos.push({
            name: i,
            status: i
          })
        }
      }
    },
    created () {
      this.initArray()
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>
