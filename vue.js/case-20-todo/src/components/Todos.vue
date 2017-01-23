<template>
    <section class="todoapp">
        <header class="header">
            <h1>Todos</h1>
            <input v-model="newTodo" @keyup.enter="addTodo" type="text" class="new-todo" placeholder="enter new task here">
        </header>
        <div class="main">
            <input type="checkbox" class="toggle-all">
            <ul class="todo-list">
                <li class="todo" v-for="item in filteredItems" :class="{ completed: item.completed }">
                    <div class="view">
                        <input class="toggle" type="checkbox" v-model="item.completed">
                        <label>{{ item.name }}</label>
                    </div>
                </li>
            </ul>
        </div>
        <footer class="footer">
            <span class="todo-count"><strong>{{ remaining }}</strong> uncompleted tasks</span>
            <ul class="filters">
                <li><a :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'" href="#">all</a></li>
                <li><a :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'" href="#">active</a></li>
                <li><a :class="{selected: filter === 'done'}" @click.prevent="filter = 'done'" href="#">completed</a></li>
            </ul>
        </footer>
    </section>
</template>

<script>
    export default {
      name: 'todoapp',
      data () {
        return {
          todos: [
            {
              name: 'Task one - wash the car',
              completed: false
            }
          ],
          newTodo: '',
          filter: 'all'
        }
      },
      methods: {
        addTodo: function () {
          this.todos.push({
            name: this.newTodo,
            completed: false
          })
          this.newTodo = ''
        }
      },
      computed: {
        remaining: function () {
          return this.todos.filter( function ( item ) { return !item.completed }).length
        },
        filteredItems: function () {
          if ( this.filter === 'todo' ) {
            return this.todos.filter( function ( item ) { return !item.completed })
          } else if ( this.filter === 'done' ) {
            return this.todos.filter( function ( item ) { return item.completed })
          } else if ( this.filter === 'all' ) {
            return this.todos
          }
        },
        allDone: {
          set: function ( value ) {
            this.todos.forEach( function ( item ) {
              item.completed = value
            })
          },
          get: function () {
            //
          }
        }
      }
    }
</script>

<style src="./todos.css"></style>