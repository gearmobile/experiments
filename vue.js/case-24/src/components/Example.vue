<template>
    <div id="example">
        <ul :class="listHolder">
            <li :class="listItem" v-for="item in names" v-text="item"></li>
        </ul>
        <input type="text" v-model="newItem" @keyup.enter="addItem">
        <button :title="btnTitle" type="button" @click="addItem">add item</button>
        <form action="demo_form.asp">
            <input type="checkbox" name="vehicle" value="Bike" :class="{ checkedClass: checked }"> I have a bike<br>
            <input type="checkbox" name="vehicle" value="Car" checked> I have a car<br>
            <input type="submit" value="Submit">
        </form>
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
        listItem: 'list__item',
        checkedClass: 'remark'
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
    .remark {
        color: red;
    }
</style>