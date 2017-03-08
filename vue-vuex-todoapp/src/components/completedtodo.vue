<template>
  <div id="completed-todos" class="container">
    <h3 v-if="completed.length">completed todos: {{ completed.length }}</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="todo in completed">
        {{ todo.body }}
        <div class="btn-group">
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
      remove (todo) {
        this.$store.dispatch('removeTodo', todo)
      }
    },
    computed: {
      completed () {
        return this.$store.getters.completedTodos
      }
    }
  }
</script>

<style lang="css" scoped>
  #completed-todos h3 {
    text-transform: capitalize;
  }
</style>
