<template>
  <div id="gettodo" class="container">
    <h3 class="gettodo-title">get todo here</h3>
    <input type="text" class="form-control" :value="newTodo" @change="getTodo" placeholder="I need to...">
    <button type="button" class="btn btn-primary" @click="addTodo">add todo</button>
  </div>
</template>

<script>
  export default {
    methods: {
      getTodo (event) {
        this.$store.dispatch('getTodo', event.target.value)
      },
      addTodo () {
        this.$store.dispatch('addTodo')
        this.$store.dispatch('clearTodo')
      }
    },
    computed: {
      newTodo () {
        return this.$store.getters.newTodo
      }
    }
  }
</script>

<style lang="css" scoped>
  .gettodo-title {
    text-transform: capitalize;
  }
</style>
