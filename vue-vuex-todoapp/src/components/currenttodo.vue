<template>
  <div id="current-todos" class="container">
    <h3 v-if="todos.length">Current todos: {{ todos.length }}</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="todo in todos">
        {{ todo.body }}
        <div class="btn-group">
          <button type="button" class="btn btn-default btn-sm" @click="edit(todo)">
            <span class="glyphicon glyphicon-edit"></span>
            edit
          </button>
          <button type="button" class="btn btn-default btn-sm" @click="complete(todo)">
            <span class="glyphicon glyphicon-ok-circle"></span>
            complete
          </button>
          <button type="button" class="btn btn-default btn-sm" @click="remove(todo)">
            <span class="glyphicon glyphicon-remove-circle"></span>
            remove
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      edit (todo) {
        this.$store.dispatch('editTodo', todo)
      },
      complete (todo) {
        this.$store.dispatch('completeTodo', todo)
      },
      remove (todo) {
        this.$store.dispatch('removeTodo', todo)
      }
    },
    computed: {
      todos () {
        return this.$store.getters.todos
      }
    }
  }
</script>

<style lang="css">
  #current-todos h3 {
    text-transform: capitalize;
  }
  .btn-group {
    float: right;
  }
</style>
