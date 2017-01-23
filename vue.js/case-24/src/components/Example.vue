<template>
    <div id="example">
        <ul :class="listHolder">
            <li :class="listItem" v-for="item in names" v-text="item"></li>
        </ul>
        <input type="text" v-model="newItem" @keyup.enter="addItem">
        <button :title="btnTitle" type="button" @click="addItem">add item</button>
    </div>
</template>

<script>
  export default {
    name: 'example',
    data () {
      return {
        names: [ 'john', 'mary', 'aaron', 'peter' ],
        newItem: null,
        btnTitle: 'Button title',
        listHolder: 'list',
        listItem: 'list__item'
      }
    },
    methods: {
      addItem () {
        this.names.push(this.newItem)
        this.newItem = null
      }
    }
  }
</script>

<style>
    .list {
        text-align: left;
    }
    .list__item {
        text-transform: capitalize;
        color: darkslategrey;
        font-size: 20px;
    }
</style>